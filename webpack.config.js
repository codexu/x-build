const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  // 入口
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:6].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 配置loader
  module: {
    rules: [
      // 编译es6
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      // 编译jade
      {
        test: /\.(jade|pug)$/,
        use: ['html-loader', 'pug-html-loader']
      },
      // 图片处理
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'assets/images/[name][hash].[ext]'
          }
        }]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 40,
              remPrecision: 8
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  // 开发模式
  config.devServer = {
    port: '3000',
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  }
  config.devtool = '#cheap-module-eval-source-map'
  config.plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  )
} else {
  // 生产模式
}

module.exports = config