const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
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
          'postcss-loader',
          'stylus-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jade|pug)$/,
        exclude: /node_modules/,
        use: ['html-loader', 'pug-html-loader']
      },
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
  /* 此项是为css单独打包，将MiniCssExtractPlugin.loader按数组位置插入 */
  config.module.rules[0].use.splice(1, 0, MiniCssExtractPlugin.loader)
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash:8].css',
    })
  )
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10
        }
      }
    }
  }
}

module.exports = config