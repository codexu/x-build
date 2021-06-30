// 写入文件，安装依赖
import fs = require('fs-extra');
import chalk = require('chalk');
import path = require('path');
// import { spawn } from 'child_process';
import clearConsole from './utils/clearConsole';
import execa = require('execa');
import createTemplate from './createTemplate';
import options from './options';

let startTime: number, endTime: number;

export default async function (name: string): Promise<void> {
  // CLI 模板文件夹路径
  const src = path.resolve(__dirname, '../template');
  // 获取基础参数
  options.name = name;
  options.dest = path.resolve(process.cwd(), name);
  const writeTemplate  = createTemplate(options.dest)
  // const execa = createExeca(options.dest)

  startTime = new Date().getTime()
  clearConsole('cyan', `X-BUILD v${options.version}`);
  console.log(`> 项目模板生成于目录： ${chalk.yellow(options.dest)}`);
  // 拷贝模板文件
  await fs.copy(src, options.dest);
  await writeTemplate('package.json');
  
  await execa('git', ['init']);
  await execa('git', ['add', '.']);
  await execa('git', ['commit', '-m', '"Initialize by X-BUILD"']);
  console.log(`> 成功初始化 Git 仓库`);
  console.log(`> 正在自动安装依赖，请稍等...`);
  console.log('');
  await execa('npm', ['install']);
  clearConsole('cyan', `Mapwhale v${options.version}`);
  endTime = new Date().getTime();
  const usageTime = (endTime - startTime) / 1000
  console.log(`> 项目已经创建成功，用时${chalk.cyan(usageTime)}s，请输入以下命令继续...`);
  console.log('');
  console.log(chalk.cyan(' $ ') + chalk.blueBright(`cd ${name}`));
  console.log(chalk.cyan(' $ ') + chalk.blueBright('npm run serve'));
}

/**
 * 安装依赖指令
 * @param {string} dest 需要执行指令的路径
 */
// function spawnCmd(dest: string, stdio = [0, 1, 2], cmd: string, instruction) {
//   const ls = spawn(cmd, instruction, {
//     cwd: dest,
//     stdio: stdio,
//     shell: true
//   });
//   return new Promise((resolve, reject) => {
//     ls.on('close', (code) => {
//       if (code === 0) {
//         resolve(true)
//       } else {
//         reject();
//       }
//     });
//   })

// }
