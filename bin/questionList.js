const inquirer = require('inquirer');

const msg = require('../lib/msg');
const question = require('../lib/question');
const hasYarn = require('../lib/hasYarn');
const setParam = require('../lib/setParam');

/**
 * @description: 问题输入列表
 */
function questionList() {
  return new Promise(resolve => {
    // 当使用create命令时
    if (this.commander.create) {
      // 创建文件夹名、项目名
      this.name = this.commander.create;
      // 判断包管理器 优先级 yarn > cnpm > npm
      this.answers.package_manager = hasYarn();

      // 判断是否具有 -q 参数 默认关闭eslint\rem\css预处理器\不安装任何插件
      if (this.commander.quick) {
        this.answers.eslint = false;
        this.answers.rem = false;
        this.answers.pug = false;
        this.answers.precss = 'No';
        this.answers.plugin = [];
        setParam.call(this);
        resolve();
        return;
      }

      // 提示问题选项
      inquirer.prompt([
        question.eslint,
        question.rem,
        question.pug,
        question.precss,
        question.plugin
      ]).then(answers => {
        // 选项赋值
        this.answers.eslint = answers.eslint;
        this.answers.rem = answers.rem;
        this.answers.pug = answers.pug;
        this.answers.precss = answers.precss;
        this.answers.plugin = answers.plugin;
        // 选项完成后设置基本参数
        setParam.call(this);
        msg.line();
        resolve();
      });
    } else {
      msg.fail(this.spinner, `请检查指令参数是否正确！`);
      process.exit();
    }
  });
}

module.exports = questionList;