const request = require('request');

/**
 * @description: 通过 npmjs.org api 获取 x-build-cli 最新版本号
 * @param {url}[String]: npmjs.org api 地址
 * @return {Promise}: 如果访问成功，返回版本号
 */
function getVersion(url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (!error && response.statusCode === 200){
        resolve(JSON.parse(body).version);
      }
    });
  });
}

module.exports = getVersion;