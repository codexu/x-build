const chalk = require('chalk');
const cmd = require('./cmd');

/**
 * @description: 使用 cmd 安装项目依赖
 * @param {type}[String]: 包管理器名称
 * @param {dependencies}[Array]: 要安装的包名
 * @return {Promise}
 */
function install(type, dependencies) {
  return new Promise(resolve => {
    if ((dependencies instanceof Array && dependencies.length > 0) || dependencies === null) {
      this.progressCurrent++;
      let installStr = `[${this.progressCurrent}/${this.progress}] 正在使用 ${chalk.greenBright(this.answers.package_manager)} 安装 ${dependencies ? dependencies.join(' ') : null || 'x-build 基础依赖'}`;
      this.spinner.start([installStr]);
      const cmdStr = type + (dependencies ? dependencies.join(' ') : '');
      cmd([`cd ${this.name}`, cmdStr]).then(() => {
        resolve(cmdStr);
      });
    } else {
      resolve('error');
    }
  });
}

module.exports = install;