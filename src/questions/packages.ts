import path = require('path');
import { readdir } from 'fs/promises';
import fs = require('fs-extra');
import { prompt, QuestionCollection } from 'inquirer';
import options from '../options';

async function createQuestion(quesiton) {
  const result: QuestionCollection = await prompt([quesiton]);
  Object.assign(options, result);
  return Promise.resolve();
}

async function createQuestions(): Promise<void> {
  const packages = [];
  const dirs = await readdir(options.src);
  dirs.forEach(pluginPath => {
    const src = path.resolve(options.src, pluginPath, 'package.json')
    packages.push(fs.readJsonSync(src));
  })
  options.allPackages = packages;
  await createQuestion({
    name: 'plugins',
    type: 'checkbox',
    message: '选择需要安装的组件',
    choices: packages.map(item => ({ name: item.description, value: item.name })),
  });
}

export default createQuestions;