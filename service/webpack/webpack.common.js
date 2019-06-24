const path = require('path');
const config = require(path.resolve(`${process.cwd()}/xbuild.config.js`));
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = path.resolve(process.cwd());

module.exports = {
  entry: config.entry,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${basePath}/src/index.${config.pug ? 'pug' : 'html'}`
    }),
  ],
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve('./dist')
  },
  stats:{
    modules: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    version: false,
    chunkModules: false
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV === 'serve' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          isRem(),
          'postcss-loader',
          'stylus-loader',
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV === 'serve' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          isRem(),
          'postcss-loader',
          'less-loader',
        ]
      },{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV === 'serve' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          isRem(),
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'serve' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          isRem(),
          'postcss-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoader()
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jade|pug)$/,
        exclude: /node_modules/,
        use: 'pug-loader'
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':src', ':data-src', ':poster']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: config.base64 || 8 * 1024,
            name: '[name][hash:7].[ext]',
            outputPath: 'static/'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: config.base64 || 8 * 1024,
            name: '[name][hash:7].[ext]',
            outputPath: 'static/'
          }
        }]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: config.base64 || 8 * 1024,
            name: '[name][hash:7].[ext]',
            outputPath: 'static/'
          }
        }]
      }
    ]
  }
};


function jsLoader() {
  const arr = [];
  if (config.babel) arr.push('babel-loader');
  if (config.eslint) arr.push('eslint-loader');
  return arr;
}

function isRem() {
  if (config.designWidth) {
    return {
      loader: 'px2rem-loader',
      options: {
        remUnit: config.designWidth * 20 / 320,
        remPrecision: 8
      }
    };
  } else {
    return 'postcss-loader';
  }
}
