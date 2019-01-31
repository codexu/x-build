#!/usr/bin/env node

const execute = require('../../lib/execute');
const CMD_STR = './node_modules/.bin/webpack --config ./node_modules/x-build/service/webpack/webpack.prod.js';

(async function () {
  await execute(CMD_STR, false, (contents) => console.log(contents));
})();