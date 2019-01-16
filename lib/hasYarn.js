const child_process = require('child_process');

/**
 * @description: 检测包管理器 优先级 yarn > cnpm > npm
 * @return {String}
 */

/* eslint-disable */
function hasYarn() {
  let _hasYarn = '';
  try {
    child_process.execSync('yarnpkg --version', { stdio: 'ignore' });
    return (_hasYarn = 'yarn');
  } catch (e) {
    try {
      child_process.execSync('cnpm --version', { stdio: 'ignore' });
      return (_hasYarn = 'cnpm');
    } catch (e) {
      return (_hasYarn = 'npm');
    }
  }
}
/* eslint-enable */

module.exports = hasYarn;