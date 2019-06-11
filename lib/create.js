// 初始化创建步骤选项列表
const { inquirerList, inquirerPrecssList, options, dependencies } = require('./store');
const inquirer = require('inquirer');
const inquirerOptions = inquirer.createPromptModule();
const inquirerPrecss = inquirer.createPromptModule();
const store = require('./store');

module.exports = function() {
  inquirerOptions(inquirerList).then(answers => {
    answers.options.forEach(item => {
      if ( item === false) store.options[item] = true;
      if (item !== 'precss' && item in dependencies) {
        options.dependencies = [...options.dependencies, ...dependencies[item]];
      } else if (item === 'precss') {
        hasPrecss();
      }
    });
    if (!answers.options.includes('precss')) require('./creator')();
  });
};

// 输出 css 预处理器 选项
function hasPrecss() {
  inquirerPrecss(inquirerPrecssList).then(answers => {
    store.options.precss = answers.Precss;
    options.dependencies = [...options.dependencies, ...dependencies[answers.Precss]];
    require('./creator')();
  });
}