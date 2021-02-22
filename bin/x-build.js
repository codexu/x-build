#! /usr/bin/env node
const program = require('commander');
const requiredPackageVersion = require('../package.json').version;
const hasDir = require('./utils/hasDir');


let cmd, dirname;

program.version(requiredPackageVersion)
  .usage('<command> [options]');

program.command('create <app-name>')
  .description('create a new project powered by x-build')
  .action(async(name, cmd) => {
    // 判断是否存在创建的目录
    await hasDir(name);
    cmd = 'create';
    dirname = name;
    require('./creator')(name);
  });

program.parse(process.argv);