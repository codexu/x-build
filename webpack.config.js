const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const isDev = process.env.NODE_ENV === 'development'

const config = {
  // 入口
  entry: path.join(__dirname, 'src/app.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'output')
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
        use: [{
          loader: 'pug-loader',
          options: {
            pretty: isDev
          }
        }]
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
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development' : '"production'
      }
    }),
    // 清理dist目录
    new CleanWebpackPlugin(['output']),
    // 配置入口模版文件
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    })
  ]
}

// 开发模式
if (isDev) {
  config.module.rules.push(
    {
      test: /\.styl$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    }
  )
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: '3000',
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  }
  config.plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  )
}

// 生产模式
if (!isDev) {
  config.entry = {
    app: path.join(__dirname, 'src/app.js'),
    // vendor: ['loadsh']
  },
  config.output.filename = 'assets/scripts/[name][chunkhash:8].js',
  config.module.rules.push(
    {
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      })
    }
  )
  config.plugins.push(
    new UglifyJsPlugin(),
    new ExtractTextPlugin('./assets/style/style.[contentHash:8].css'),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  )
}

module.exports = config