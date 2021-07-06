#! /usr/bin/env node

import program = require('commander');
import hasDir from './utils/hasDir';
import creator from './creator';
import addPlugins, { copyPlugins, install, pluginConsole } from './addPlugins';
import packageVersion from './utils/packageVersion';
import options from './options';

async function run() {
  await packageVersion();
  program.version(options.version)
    .usage('<command> [options]');

  program.command('create <app-name>')
    .description('创建一个基于 vue3 + typescript 的项目')
    .action(async (name) => {
      await hasDir(name);
      creator(name);
    });

  program.command('add [plugin-name]')
    .description('选择并添加一些实用的插件')
    .action(async (name) => {
      await addPlugins(name);
      await copyPlugins();
      await install();
      await pluginConsole();
    });

  program.parse(process.argv);
}

run();