#! /usr/bin/env node
const program = require('commander');
const requiredPackageVersion = require('../package.json').version;
const hasDir = require('./utils/hasDir');


program.version(requiredPackageVersion)
  .usage('<command> [options]');

program.command('create <app-name>')
  .description('create a new project powered by x-build')
  .action(async(name) => {
    // 判断是否存在创建的目录
    await hasDir(name);
    require('./creator')(name);
  });

program.parse(process.argv);