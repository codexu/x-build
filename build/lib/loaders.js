const isRem = require('./isRem');
const Package = require('../../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (mode) => {
  let loaders = [
    {
      test: /\.styl$/,
      exclude: /node_modules/,
      use: [
        mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader?sourceMap',
        isRem(Package.rem),
        'postcss-loader',
        'stylus-loader',
      ]
    },
    {
      test: /\.css$/,
      use: [
        mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader?sourceMap',
        isRem(Package.rem),
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
