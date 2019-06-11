// 初始化基本命令及参数

const program = require('commander');
const { checkPackageVersion } = require('./utils/check');
const requiredNodeVersion = require('../package.json').engines.node;
const requiredPackageVersion = require('../package.json').version;
const clearConsole = require('./utils/clearConsole');
const { checkNodeVersion } = require('./utils/check');
const store = require('./store');

module.exports = function initialization() {
  // 检测 node 版本
  checkNodeVersion(requiredNodeVersion, 'x-build');
 // commander 配置
  programConfig();
};

function programConfig() {
  program.version(requiredPackageVersion)
  .usage('<command> [options]');

  // 配置 项目创建指令
  program.command('create <app-name>')
    .description('create a new project powered by x-build')
    .option('-n, noversion', `Prohibited Version Detection`)
    .option('-q, quick', 'Quick Initialization Project')
    .action((name, cmd) => {
      store.cmd = 'create';
      // 清空控制台，并输出当前 x-build 版本
      clearConsole('cyan', `X-BUILD v${requiredPackageVersion}`);
      store.dirname = name;
      if (cmd.noversion) {
        isQuickCreact(cmd);
      } else {
        // 检测 x-build 版本（通过 npm 获取 latest 版本号）
        checkPackageVersion(store.npmVersionUrl).then(() => {
          isQuickCreact(cmd);
        });
      }
    });

  // 配置 新增功能指令
  // program.command('add <plugin>')
  //   .description('install a plugin and invoke its generator in an already created project')
  //   .action((name, cmd) => {
  //     console.log(name, cmd);
  //   });

  // 测试
  program.command('test <name>')
    .description('x-build in travis-ci test')
    .option('-a, test1', 'test babel && eslint')
    .option('-b, test2', 'test pug')
    .option('-c, test3', 'test rem layout')
    .option('-d, test4', 'test precss sass')
    .option('-e, test5', 'test precss less')
    .option('-f, test6', 'test precss stylus')
    .action((name, cmd) => {
      store.cmd = 'test';
      switch (name) {
        case 'bs':
          store.options.eslint = true;
          store.options.babel = true;
          break;
        case 'pug':
          store.options.pug = true;
          break;
        case 'mobileLayout':
          store.options.mobileLayout = true;
          break;
        case 'sass':
          store.options.precss = 'scss';
          break;
        case 'less':
          store.options.precss = 'less';
          break;
        case 'stylus':
          store.options.precss = 'styl';
          break;
        default:
          store.options.eslint = true;
          store.options.babel = true;
          break;
      }
      require('./creator')();
    });
  // 执行
  program.parse(process.argv);
}

// 判断是否初始化快速创建项目
function isQuickCreact(cmd) {
  if (cmd.quick) {
    require('./creator')();
  } else {
    require('./create')();
  }
}