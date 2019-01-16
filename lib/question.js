const chalk = require('chalk');

// 问题选择
const question = {
  eslint: {
    type: 'confirm',
    message: `是否使用ESLint？`,
    name: 'eslint',
    default: true
  },
  rem: {
    type: 'confirm',
    message: `是否使用rem布局？`,
    name: 'rem',
    default: true
  },
  pug: {
    type: 'confirm',
    message: `是否使用pug模板引擎？`,
    name: 'pug',
    default: true
  },
  precss: {
    type: 'list',
    message: `选择CSS预处理器: `,
    name: 'precss',
    choices: ['No', 'Sass', 'Less', 'Stylus']
  },
  plugin: {
    type: 'checkbox',
    message: `选择安装插件: `,
    name: 'plugin',
    choices: [
      {
        value: 'x-load',
        name: `${chalk.green('x-load')}: ${chalk.blue('图片加载控制')}`,
        short: 'x-load',
        checked: false
      },
      {
        value: 'x-touch',
        name: `${chalk.green('x-touch')}: ${chalk.blue('原生DOM支持触控')}`,
        short: 'x-touch',
        checked: false
      },
      {
        value: 'x-animate',
        name: `${chalk.green('x-animate')}: ${chalk.blue('滚动执行动画')}`,
        short: 'x-animate',
        checked: false
      },
      {
        value: 'x-fullpage',
        name: `${chalk.green('x-fullpage')}: ${chalk.blue('整屏翻页')}`,
        short: 'x-fullpage',
        checked: false,
      },
      {
        value: 'x-music',
        name: `${chalk.green('x-music')}: ${chalk.blue('背景音乐及控制')}`,
        short: 'x-music',
        checked: false,
      }
    ]
  }
};

module.exports = question;