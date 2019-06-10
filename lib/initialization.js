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
  // 清空控制台，并输出当前 x-build 版本
  clearConsole('cyan', `X-BUILD v${requiredPackageVersion}`);
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
  program.command('add <plugin>')
    .description('install a plugin and invoke its generator in an already created project')
    .action((name, cmd) => {
      console.log(name, cmd);
    });
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