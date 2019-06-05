const { inquirerList, inquirerPrecssList, options, dependencies } = require('./store');
const inquirer = require('inquirer');
const inquirerOptions = inquirer.createPromptModule();
const inquirerPrecss = inquirer.createPromptModule();
const store = require('./store');

module.exports = function() {
  inquirerOptions(inquirerList).then(answers => {
    store.answers = answers.options;
    answers.options.forEach(item => {
      if (item !== 'precss' && item in dependencies) {
        options.dependencies = [...options.dependencies, ...dependencies[item]]
      } else if (item === 'precss') {
        hasPrecss();
      }
    });
    if (!answers.options.includes('precss')) require('./creator')();
  })
};

// 输出 css 预处理器 选项
function hasPrecss() {
  inquirerPrecss(inquirerPrecssList).then(answers => {
    options.dependencies = [...options.dependencies, ...dependencies[answers.Precss]]
    require('./creator')(); 
  })
}