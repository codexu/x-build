const path = require('path');
const chalk = require('chalk');
const config = require(path.resolve(`${process.cwd()}/xbuild.config.js`));
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const clearConsole = require('../../lib/utils/clearConsole');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: config.port,
    hot: true,
    proxy: config.proxy,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

const compiler = webpack({});

compiler.watch({
  // watchOptions 示例
  aggregateTimeout: 300,
  ignored: /node_modules/,
  poll: 1000
}, () => {
  clearConsole('magenta', `X-BUILD v${require('../../package.json').version}`);
  console.log(chalk.green(`- Local: http://localhost:${config.port}/`));
  console.log(chalk.green(`- Network: http://${getIPAdress()}:${config.port}/`));
  console.log(chalk.green(`- Documentation: https://codexu.github.io/`));
  console.log('');
});

function getIPAdress() {
  let interfaces = require('os').networkInterfaces();
  // eslint-disable-next-line guard-for-in
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}