// 写入文件，安装依赖
import fs = require('fs-extra');
import chalk = require('chalk');
import path = require('path');
import clearConsole from './utils/clearConsole';
import createSpawnCmd from './utils/createSpawnCmd';
import createTemplate from './createTemplate';
import options from './options';

let startTime: number, endTime: number;

export default async function (name: string): Promise<void> {
  // CLI 模板文件夹路径
  const src = path.resolve(__dirname, '../template');
  // 获取基础参数
  options.name = name;
  options.dest = path.resolve(process.cwd(), name);
  const writeTemplate  = createTemplate(options.dest);
  const cmdIgnore = createSpawnCmd(options.dest, 'ignore');
  const cmdInherit = createSpawnCmd(options.dest, 'inherit');

  startTime = new Date().getTime()
  clearConsole('cyan', `X-BUILD v${options.version}`);
  console.log(`> 项目模板生成于目录： ${chalk.yellow(options.dest)}`);
  // 拷贝模板文件
  await fs.copy(src, options.dest);
  await writeTemplate('package.json');
  
  await cmdIgnore('git', ['init'])
  await cmdIgnore('git', ['add .'])
  await cmdIgnore('git', ['commit -m "Initialize by X-BUILD"'])
  console.log(`> 成功初始化 Git 仓库`);
  console.log(`> 正在自动安装依赖，请稍等...`);
  console.log('');
  await cmdInherit('npm', ['install']);
  await cmdIgnore('git', ['add .'])
  await cmdIgnore('git', ['commit -m "Initialize by X-BUILD"'])
  clearConsole('cyan', `Mapwhale v${options.version}`);
  endTime = new Date().getTime();
  const usageTime = (endTime - startTime) / 1000
  console.log(`> 项目已经创建成功，用时${chalk.cyan(usageTime)}s，请输入以下命令继续...`);
  console.log('');
  console.log(chalk.cyan(' $ ') + chalk.blueBright(`cd ${name}`));
  console.log(chalk.cyan(' $ ') + chalk.blueBright('npm run serve'));
}
