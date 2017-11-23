const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    // 代码压缩
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // 去掉（第三方库）额外的日志记录(log)和测试(test)
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // 模块标识符（第三方库一般不会修改）
    new webpack.HashedModuleIdsPlugin()
  ]
});