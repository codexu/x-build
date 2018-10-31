const webpack = require('webpack');
const config = require('./webpack.config');
const Package = require('../package.json');
const loaders = require('./lib/loaders');

// 开发模式
config.mode = 'development';
config.module = {rules: loaders('development')};
config.devtool = 'cheap-module-eval-source-map';

config.devServer = {
  port: Package.port,
  overlay: {
    errors: true
  },
  hot: true,
  stats:{
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
};

config.plugins.push(
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;