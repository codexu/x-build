const chalk = require('chalk');
const readline = require('readline');

/**
 * @description: 控制台清空，并输出提示信息
 * @param {color}[String]: 输出信息颜色 
 * @param {str}[String]: 输出信息
 */
function clearConsole(color, str) {
  if (process.stdout.isTTY) {
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank); // eslint-disable-line
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    console.info(chalk[color](str)); // eslint-disable-line
  }
}

module.exports = clearConsole;