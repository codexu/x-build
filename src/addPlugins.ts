import fs = require('fs-extra');
import path = require('path');
import chalk = require('chalk');
import createQuestions from './questions/plugins';
import options from './options';
import readJson from './utils/readJson';
import createSpawnCmd from './utils/createSpawnCmd';

export default async function (name: string): Promise<void> {
  // CLI package 文件夹路径
  options.src = path.resolve(__dirname, '../package');
  // 获取基础参数
  options.name = name;
  options.dest = process.cwd();

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
  const plugins = await readJson('plugins.json');
  const pluginsPromise = options.plugins.map((name) => {
    const plugin = plugins.find(item => item.value === name);
    const src = path.resolve(options.src, plugin.src);
    const dest = path.resolve(options.dest, plugin.dest);
    return fs.copy(src, dest);
  })
  await Promise.all(pluginsPromise)
}

export async function install(): Promise<void> {
  const plugins = await readJson('plugins.json');
  const dependencies = options.plugins.map((pluginName) => {
    const { packages } = plugins.find(item => item.value === pluginName);
    const packageDependencies = packages.map(pkg => `${pkg.name}@${pkg.version}`)
    return packageDependencies.join(' ');
  })
  const cmdInherit = createSpawnCmd(options.dest, 'inherit');
  await cmdInherit('npm', [`install ${dependencies.join(' ')} --save`]);
}

export async function pluginConsole(): Promise<void> {
  const installed = [];
  const plugins = await readJson('plugins.json');
  options.plugins.forEach(pluginName => {
    const plugin = plugins.find(item => item.value === pluginName);
    if (plugin) installed.push(plugin);
  })
  console.log(chalk.cyan('成功安装插件：'));
  installed.forEach(item => {
    console.log(` - ${item.name} (${item.dest})`);
  })
}