const webpack = require('webpack');
const base = require('./webpack.base');
const config = require('./config.json');
const loaders = require('./lib/loaders');

// 开发模式
base.mode = 'development';
base.module = {rules: loaders('development')};
base.devtool = 'cheap-module-eval-source-map';

base.devServer = {
  port: config.port,
  overlay: {
    errors: true
  },
  open: true,
  hot: true,
  stats:{
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
};

base.plugins.push(
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
);

module.exports = base;