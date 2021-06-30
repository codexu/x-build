// 写入文件，安装依赖
import fs = require('fs-extra');
import chalk = require('chalk');
import path = require('path');
import { spawn } from 'child_process';
import clearConsole from './utils/clearConsole';
import createTemplate from './createTemplate';
import options from './options';

let startTime, endTime;

export default async function (name: string): Promise<void> {
  // CLI 模板文件夹路径
  const src = path.resolve(__dirname, '../template');
  // 目标路径
  const dest = path.resolve(process.cwd(), name);
  const writeTemplate  = createTemplate(dest)

  // startTime = new Date().getTime()
  clearConsole('cyan', `X-BUILD v${options.version}`);
  console.log(`> 项目模板生成于目录： ${chalk.yellow(dest)}`);
  // 拷贝模板文件
  await fs.copy(src, dest);
  await writeTemplate('package.json');
  await writeTemplate('src/test.ts');
  
  await spawnCmd(dest, null, 'git', ['init'])
  await spawnCmd(dest, null, 'git', ['add .'])
  await spawnCmd(dest, null, 'git', ['commit -m "Initialize by X-BUILD"'])
  console.log(`> 成功初始化 Git 仓库`);
  console.log(`> 正在自动安装依赖，请稍等...`);
  console.log('');
  await spawnCmd(dest, [0, 1, 2], 'npm', ['install']);
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
function spawnCmd(dest: string, stdio = [0, 1, 2], cmd: string, instruction) {
  const ls = spawn(cmd, instruction, {
    cwd: dest,
    stdio: stdio,
    shell: true
  });
  return new Promise((resolve, reject) => {
    ls.on('close', (code) => {
      if (code === 0) {
        resolve(true)
      } else {
        reject();
      }
    });
  })

}
