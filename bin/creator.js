// 写入文件，安装依赖
const fs = require('fs-extra');
const chalk = require('chalk');
const path = require('path');
const {
  spawn
} = require('child_process');
const clearConsole = require('./utils/clearConsole');

let startTime, endTime;

module.exports = function (name) {
  // CLI 模板文件夹路径
  const src = path.resolve(__dirname, '../template');
  // 目标路径
  const dest = path.resolve(process.cwd(), name);

  startTime = new Date().getTime()
  clearConsole('cyan', `x-build v${require('../package').version}`);
  console.log(`> 项目模板生成于目录： ${chalk.yellow(dest)}`);
  console.log(`> 正在自动安装依赖，请稍等...`);
  console.log('');

  // 拷贝模板文件
  fs.copy(src, dest).then(() => {
    // 执行自动安装依赖
    spawnCmd(dest, name);
  });
};

/**
 * 安装依赖指令
 * @param {string} dest 需要执行指令的路径
 */
function spawnCmd(dest, name) {
  const ls = spawn('npm', ['install'], {
    cwd: dest,
    stdio: 'inherit',
    shell: true
  });
  ls.on('close', (code) => {
    // 成功安装依赖
    if (code === 0) {
      clearConsole('cyan', `x-build v${require('../package').version}`);
      endTime = new Date().getTime();
      usageTime = (endTime - startTime) / 1000
      console.log(`> 项目已经创建成功，用时${chalk.cyan(usageTime)}s，请输入以下命令继续...`);
      console.log('');
      console.log(chalk.cyan(' $ ') + chalk.blueBright(`cd ${name}`));
      console.log(chalk.cyan(' $ ') + chalk.blueBright('npm run serve'));
    }
  });
}