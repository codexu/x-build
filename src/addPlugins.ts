import fs = require('fs-extra');
import path = require('path');
import chalk = require('chalk');
import clearConsole from './utils/clearConsole';
import createQuestions from './questions/packages';
import options from './options';
import readJson from './utils/readJson';
import createSpawnCmd from './utils/createSpawnCmd';
import { readdir } from "fs/promises";

export default async function (name: string): Promise<void> {
  // CLI package 文件夹路径
  options.src = path.resolve(__dirname, '../packages');
  // 获取基础参数
  options.name = name;
  options.dest = process.cwd();
  const packages = [];
  const dirs = await readdir(options.src);
  dirs.forEach(pluginPath => {
    const src = path.resolve(options.src, pluginPath, 'package.json')
    packages.push(fs.readJsonSync(src));
  })
  options.allPackages = packages;

  if (name === undefined) {
    // 执行自定义选项
    await createQuestions();
  } else {
    const plugins = await readJson('plugins.json');
    const plugin = plugins.find(item => item.value === name);
    if (plugin !== undefined) {
      options.plugins = [name];
    } else {
      console.log(chalk.red('脚手架中并不存在此插件！'));
      process.exit(1);
    }
  }
}

export async function copyPlugins(): Promise<void> {
  const pluginsPromise = options.plugins.map((name) => {
    const plugin = options.allPackages.find(item => item.name === name);
    const src = path.resolve(options.src, plugin.name, 'src');
    const dest = path.resolve(options.dest, plugin.dest);
    return fs.copy(src, dest);
  })
  await Promise.all(pluginsPromise)
}

export async function install(): Promise<void> {
  const packages = [];
  options.plugins.forEach((pluginName) => {
    const { dependencies } = options.allPackages.find(item => item.name === pluginName);
    const packageDependencies = Object.keys(dependencies).map(key => `${key}@${dependencies[key]}`)
    packages.push(...packageDependencies);
  })
  const packagesStr = [...new Set(packages)].join(' ')
  const cmdInherit = createSpawnCmd(options.dest, 'inherit');
  await cmdInherit('npm', [`install ${packagesStr} --save`]);
}

export async function pluginConsole(): Promise<void> {
  const installed = [];
  options.plugins.forEach(pluginName => {
    const plugin = options.allPackages.find(item => item.name === pluginName);
    if (plugin) installed.push(plugin);
  })
  clearConsole('cyan', `X-BUILD v${options.version}`);
  console.log(chalk.cyan('成功安装插件：'));
  console.log('');
  installed.forEach(item => {
    console.log(`- ${item.description} [${chalk.green(item.version)}] (${item.dest})`);
  })
}
