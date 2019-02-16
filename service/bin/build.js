#!/usr/bin/env node
const os = require('os');
const execute = require('../../lib/execute');
const CMD_STR = './node_modules/.bin/webpack --config ./node_modules/x-build/service/webpack/webpack.prod.js';

if (os.type() === 'Windows_NT') {
  CMD_STR.replace(new RegExp('/', 'g'), '\\');
}

(async function () {
  await execute(CMD_STR, false, (contents) => console.log(contents));
})();