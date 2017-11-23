const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  // source-map
  devtool: 'inline-source-map',
  // 启动服务器，监听3000端口
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  // 单独配置生成的html代码不压缩
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      minify: false
    })
  ]
});