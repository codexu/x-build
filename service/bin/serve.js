#!/usr/bin/env node

const execute = require('../../lib/execute');
const CMD_STR = './node_modules/.bin/webpack-dev-server --config ./node_modules/x-build/service/webpack/webpack.dev.js';

(async function () {
  await execute(CMD_STR, true, (contents) => console.log(contents));
})();