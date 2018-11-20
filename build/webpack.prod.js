const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');
const loaders = require('./lib/loaders');

// 生产模式
base.mode = 'production';
base.module = {rules: loaders('production')};

base.plugins.push(
  new MiniCssExtractPlugin({
    filename: 'bundle.[chunkhash:8].css',
  })
);

base.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};

module.exports = base;