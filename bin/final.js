const chalk = require('chalk');
const child_process = require('child_process');

const msg = require('../lib/msg');
const cmd = require('../lib/cmd');

// 最终提示
function final() {
  if (isGit()){
    cmd([`cd ${this.name}`, 'git init']).then(() => {
      finalConsole.call(this, ', Git已初始化');
    });
  } else {
    finalConsole.call(this, null);
  }
}

// 判断是否安装git
function isGit() {
  try {
    child_process.execSync('git --version', {
      stdio: 'ignore'
    });
    return true;
  } catch (e) {
    return false;
  }
}

// 输出最终结果
function finalConsole(gitStr) {
  const _gitStr = gitStr || '';
  this.spinner.succeed([chalk.green(`全部依赖安装完成${_gitStr}。`)]);
  setTimeout(() => {
    msg.line();
    msg.print('green', `🎉  欢迎使用x-build,请继续完成以下操作:`, 'bottom');
    msg.print('cyan', ` $ cd ${this.name}`);
    msg.print('cyan', ` $ ${this.answers.package_manager === 'yarn' ? 'yarn' : 'npm run'} serve`, 'bottom');
    msg.print('green', ` [文档] https://codexu.github.io/`);
    process.exit();
  }, 500);
}

module.exports = final;