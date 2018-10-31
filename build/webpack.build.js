const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./webpack.config');
const loaders = require('./lib/loaders');

// 生产模式
config.mode = 'production';
config.module = {rules: loaders('production')};

config.plugins.push(
  new MiniCssExtractPlugin({
    filename: 'bundle.[chunkhash:8].css',
  })
);

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};

module.exports = config;