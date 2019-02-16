#!/usr/bin/env node
const os = require('os');
const execute = require('../../lib/execute');
let CMD_STR = './node_modules/.bin/webpack-dev-server --config ./node_modules/x-build/service/webpack/webpack.dev.js';

if (os.type() === 'Windows_NT') {
  CMD_STR.replace(new RegExp('/', 'g'), '\\');
}

(async function () {
  await execute(CMD_STR, true, (contents) => console.log(contents));
})();