#! /usr/bin/env node

import program = require('commander');
import hasDir from './utils/hasDir';
import creator from './creator';
import packageVersion from './utils/packageVersion';
import options from './options';

async function run() {
  await packageVersion();
  program.version(options.version)
    .usage('<command> [options]');

  program.command('create <app-name>')
    .description('create a new project with vue3 + typescript by x-build')
    .action(async (name) => {
      await hasDir(name);
      creator(name);
    });

  program.parse(process.argv);
}

run();