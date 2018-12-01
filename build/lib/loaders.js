const isRem = require('./isRem');
const config = require('../config.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (mode) => {
  let loaders = [
    {
      test: /\.styl$/,
      exclude: /node_modules/,
      use: [
        mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader?sourceMap',
        isRem(config.isRem),
        'postcss-loader',
        'stylus-loader',
      ]
    },
    {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader?sourceMap',
        isRem(config.isRem),
        'postcss-loader',
        'less-loader',
      ]
    },{
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader?sourceMap',
        isRem(config.isRem),
        'postcss-loader',
        'sass-loader',
      ]
    },
    {
      test: /\.css$/,
      use: [
        mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader?sourceMap',
        isRem(config.isRem),
        'postcss-loader',
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    },
    {
      test: /\.(jade|pug)$/,
      exclude: /node_modules/,
      use: 'pug-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name][hash:7].[ext]',
          outputPath: 'static/images/'
        }
      }]
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name][hash:7].[ext]',
          outputPath: 'static/font/'
        }
      }]
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name][hash:7].[ext]',
          outputPath: 'static/media/'
        }
      }]
    }
  ];

  return loaders;
};
