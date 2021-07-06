// 写入文件，安装依赖
import fs = require('fs-extra');
import chalk = require('chalk');
import path = require('path');
import createQuestions from './questions/creator';
import clearConsole from './utils/clearConsole';
import createSpawnCmd from './utils/createSpawnCmd';
import { ejsRender, packageRender } from './createTemplate';
import options, { fetchTemplateFiles, fetchPackageFiles } from './options';

let startTime: number, endTime: number;

export default async function (name: string): Promise<void> {
  // CLI 模板文件夹路径
  options.src = path.resolve(__dirname, '../template');
  // 获取基础参数
  options.name = name;
  options.dest = path.resolve(process.cwd(), name);
  const cmdIgnore = createSpawnCmd(options.dest, 'ignore');
  const cmdInherit = createSpawnCmd(options.dest, 'inherit');

  clearConsole('cyan', `X-BUILD v${options.version}`);

  // 执行自定义选项
  await createQuestions();

  // 开始记录用时
  startTime = new Date().getTime()
  // 拷贝基础模板文件
  await fs.copy(options.src, options.dest);
  // 拷贝 package 模板文件
  await Promise.all(fetchPackageFiles().map(file => packageRender(file)));
  // 编译 ejs 模板文件
  await Promise.all(fetchTemplateFiles().map(file => ejsRender(file)));
  console.log(`> 项目模板生成于目录： ${chalk.yellow(options.dest)}`);
  // 生成 gitignore
  await fs.move(
    path.resolve(options.dest, '.gitignore.ejs'),
    path.resolve(options.dest, '.gitignore'),
    { overwrite: true }
  );
  // Git 初始化
  await cmdIgnore('git', ['init'])
  await cmdIgnore('git', ['add .'])
  await cmdIgnore('git', ['commit -m "Initialize by X-BUILD"'])
  console.log(`> 成功初始化 Git 仓库`);

  // 依赖安装
  console.log(`> 正在自动安装依赖，请稍等...`);
  console.log('');
  await cmdInherit('npm', ['install']);

  clearConsole('cyan', `X-BUILD v${options.version}`);
  endTime = new Date().getTime();
  const usageTime = (endTime - startTime) / 1000
  console.log(`> 项目已经创建成功，用时${chalk.cyan(usageTime)}s，请输入以下命令继续...`);
  console.log('');
  console.log(chalk.cyan(' $ ') + chalk.blueBright(`cd ${name}`));
  console.log(chalk.cyan(' $ ') + chalk.blueBright('npm run serve'));
}
