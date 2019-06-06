const path = require('path');
const config = require(path.resolve(`${process.cwd()}/xbuild.config.js`));
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

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