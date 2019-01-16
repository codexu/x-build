const os = require('os');
const nodeCmd = require('node-cmd');

/**
 * @description: 兼容 windows & mac 命令执行
 * @param {arr}[Array]: 数组值为要执行的命令
 * @return {Promise}
 */
function cmd(arr) {
  return new Promise((resolve, reject) => {
    let cmdStr = isWindows_NT(arr, os.type());
    nodeCmd.get(cmdStr, err => {
      err ? reject(err) : resolve();
    });
  });
}

function isWindows_NT(arr, osType) {
  let result = '';
  if (osType === 'Windows_NT') {
    arr.forEach((item, index) => {
      index === 0 ? result += item : result = result + ' & ' + item;
    });
  } else {
    arr.forEach((item, index) => {
      index === 0 ? result += item : result = result + '\n' + item;
    });
  }
  return result;
}

module.exports = cmd;
