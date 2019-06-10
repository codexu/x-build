#!/usr/bin/env node
const {
  spawn
} = require('child_process');
const os = require('os');
const clearConsole = require('../lib/utils/clearConsole');

const devCommand = './node_modules/.bin/webpack-dev-server';
const prodCommand = './node_modules/.bin/webpack';
const devArg = '--config ./node_modules/x-build/service/webpack/webpack.dev.js';
const prodArg = '--config ./node_modules/x-build/service/webpack/webpack.prod.js';

let command = process.env.NODE_ENV === 'serve' ? devCommand : prodCommand;
let arg = process.env.NODE_ENV === 'serve' ? devArg : prodArg;

if (os.type() === 'Windows_NT') {
  command = command.replace(new RegExp('/', 'g'), '\\');
  arg = arg.replace(new RegExp('/', 'g'), '\\');
}

clearConsole('cyan', `X-BUILD v${require('../package.json').version}`);

spawn(command, [arg], {
  stdio: 'inherit',
  shell: true,
  detached: false
});