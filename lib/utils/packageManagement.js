const child_process = require('child_process');

/**
 * @description: 检测包管理器 优先级 yarn > cnpm > npm
 * @return {String}
 */

/* eslint-disable */
function packageManagement() {
  try {
    child_process.execSync('yarnpkg --version', { stdio: 'ignore' });
    return (_hasYarn = 'yarn');
  } catch (e) {
    return (_hasYarn = 'npm');
  }
}
/* eslint-enable */

module.exports = packageManagement;