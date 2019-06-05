const assert = require('assert');
const fs = require('fs-extra');
const chalk = require('chalk');
const path = require('path');
const { spawn } = require('child_process');
const store = require('./store');

module.exports = function () {
  // CLI 模板文件夹路径
  const src = path.resolve(__dirname, '../template');
  // 目标路径
  const dest = path.resolve(process.cwd(), store.dirname);
  let cmdInstall = 'install ';
  store.options.dependencies.forEach(item => {
    cmdInstall += `${item.name}@${item.version} `
  })
  fs.copy(src, dest).then(() => {
    console.log('');
    console.log(chalk.green('Installing dependencies automatically'));
    const ls = spawn('npm', [cmdInstall], {
      cwd: dest,
      stdio: 'inherit',
      shell: true
    });
    ls.on('close', (code) => {
      console.log(`子进程退出码：${code}`);
    });
  })
}