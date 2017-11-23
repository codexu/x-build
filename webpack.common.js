const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口
  entry: {
    index: './src/scripts/index.js',
    // 配置公共库名称
    vendor: [
      'lodash', 'jquery'
    ]
  },
  // 输出
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  // loader
  module: {
    rules: [
      // 编译es6
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      // 编译sass
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' }, 
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      // 编译pug
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      // 图片处理
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          { loader: 'url-loader?limit=8192' }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // 清理dist目录
    new CleanWebpackPlugin(['dist']),
    // 打包html，获取模板文件 ./src/index.jade
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
    
    // 提取公共代码（第三方库）配置：entry.vendor
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // 提取公共代码（业务代码）
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
};