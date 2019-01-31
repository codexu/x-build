#!/usr/bin/env node

const commander = require('commander');
const Ora = require('ora');

const pkg = require('../package.json');
const start = require('./start');
const questionList = require('./questionList');
const copyTemp = require('./copyTemp');
const reviseFile = require('./reviseFile');
const install = require('../lib/install');
const final = require('./final');

/**
 * @description: 初始化默认参数
 * @param {git}: 默认git仓库模板
 * @param {commander}: commander模块
 * @param {spinner}: 安装进度提示工具
 * @param {progress}: 安装进度 默认2 github模板、devDependencies
 * @param {progressCurrent}: 当前进度 默认0 从拉取模板开始增加
 * @param {answers}[Object]: 全部选项答案
 * @param {installBaseType}: 默认包管理器
 * @param {installType}: 命令 = 包管理器名 + 安装dependencies命令
 * @param {installDevType}: 命令 = 包管理器名 + 安装devDependencies命令
 * @param {dependencies}[Array]: 运行依赖
 * @param {devDependencies}[Array]: 开发依赖
 * @param {cssExt}: 样式文件类型
 */

this.commander = commander;
this.version_url = `https://registry.npmjs.org/x-build/latest`;
this.spinner = new Ora();
this.progress = 1;
this.progressCurrent = 0;
this.answers = {};
this.installBaseType = '';
this.installType = '';
this.installDevType = '';
this.dependencies = [];
this.devDependencies = [];
this.cssExt = '';

// 初始化指令
this.commander
  .version(pkg.version)
  .option('-c, create <n>', '初始化 x-build 项目')
  .option('-n, noversion', '禁止版本检测，可能会导致项目无法正常运行！')
  .option('-q, quick', '快速创建一个项目')
  .parse(process.argv);

// 异步函数安装流程
(async function() {

  var lines = process.stdout.getWindowSize()[1];
  for(var i = 0; i < lines; i++) {
      console.log('\r\n');
  }

  // 清空控制台，查询CLI版本
  await start.call(this);
  // 输入问题列表
  await questionList.call(this);
  // 拷贝模板文件
  await copyTemp.call(this);
  // 修改JSON
  await reviseFile.call(this);
  // 安装项目依赖
  await install.call(this, this.installBaseType, null);
  // 安装 dependencies
  await install.call(this, this.installType, this.dependencies);
  // 安装 devDependencies
  await install.call(this, this.installDevType, this.devDependencies);
  // 初始化git和输出继续操作提示
  await final.call(this);
}).call(this);