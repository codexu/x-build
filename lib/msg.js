const chalk = require('chalk');

/**
 * @description: 返回一个用于输出信息对象
 * @function line(): 输出终端宽度一半的横线
 * @function print(color,text,br): 输出信息，参数color：颜色，text：输出信息，br(可选 top or bottom)：上下输出空行
 * @function docs(): 输出文档信息
 * @function issues(): 输出问题留言
 * @function fail(spinner,str,err): 输出报错信息
 */

/* eslint-disable */
const msg = {
  line: () => {
    console.info();
    console.info(chalk.gray('-'.repeat(process.stdout.columns / 2)));
    console.info();
  },
  print: (color, text, br) => {
    if (br === 'top') {
      console.info();
    }
    console.info(chalk[color](text));
    if (br === 'bottom') {
      console.info();
    }
  },
  docs: () => {
    console.info(chalk.green(' [开发文档] https://codexu.github.io/'));
  },
  issues: () => {
    console.info(chalk.green('[问题留言] https://github.com/codexu/x-build/issues'));
  },
  fail: (spinner, str, err) => {
    spinner.fail([chalk.bgRed(str)]);
    console.info('');
    if (err) {
      console.error(err);
      console.info('');
    }
    console.info(chalk.blue('[问题留言] https://github.com/codexu/x-build/issues'));
    process.exit();
  }
};
/* eslint-enable */

module.exports = msg;