const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');
const loaders = require('./lib/loaders');
const path = require('path');
const config = require(path.resolve(`${process.cwd()}/config.json`));

// 生产模式
base.mode = 'production';
base.module = {rules: loaders('production')};
base.stats = {
  modules: false,
  children: false,
  chunks: false,
  chunkModules: false,
  warnings: false
};

base.plugins.push(
  new MiniCssExtractPlugin({
    filename: 'bundle.[chunkhash:8].css',
  })
);

if (config.imagemin) {
  const ImageminPlugin = require('imagemin-webpack-plugin').default;
  base.plugins.push(
    new ImageminPlugin({
      pngquant: {
        quality: '95-100'
      }
    })
  );
}

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