const os = require('os');
const nodeCmd = require('node-cmd');
const checkOS = require('./checkOS');

/**
 * @description: 兼容 windows & mac 命令执行
 * @param {arr}[Array]: 数组值为要执行的命令
 * @return {Promise}
 */
function cmd(arr) {
  return new Promise((resolve, reject) => {
    let cmdStr = checkOS(arr, os.type());
    nodeCmd.get(cmdStr, err => {
      err ? reject(err) : resolve(cmdStr);
    });
  });
}


module.exports = cmd;
