const msg = require('../lib/msg');
const fs = require('fs-extra');
const path = require('path');

/**
 * @description: 拷贝模版文件
 * @return {Promise}
 */

function copyTemp() {
  const src = path.resolve(__dirname, '../temp');
  const dest = path.resolve(process.cwd(), this.name);
  return new Promise(resolve => {
    this.spinner.start(`[${this.progressCurrent}/${this.progress}] 正在拷贝模板文件...`);
    fs.copy(src, dest)
      .then(() => {
        resolve();
      })
      .catch(err => {
        msg.fail(this.spinner, '模板文件拷贝失败！', err);
        process.exit();
      });
  });
}

module.exports = copyTemp;