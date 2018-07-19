const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Package = require('./package.json');

const isDev = process.env.NODE_ENV === 'development' ? true : false; // eslint-disable-line
const isRem = Package.rem;

const rem = () => {
  if (isRem) {
    return {
      loader: 'px2rem-loader',
      options: {
        remUnit: 46.875,
        remPrecision: 8
      }
    };
  } else {
    return 'postcss-loader';
  }
};

const config = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [{
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          rem(),
          'postcss-loader',
          'stylus-loader',
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          rem(),
          'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          rem(),
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Package.template === 'pug' ? `./index.pug` : `./src/index.html`
    })
  ]
};

if (isRem) {
  config.entry.hotcss = './src/utils/hotcss.js';
}

if (isDev) {
  // 开发模式
  config.devServer = {
    port: Package.port,
    overlay: {
      errors: true
    },
    hot: true
  };
  config.devtool = 'cheap-module-eval-source-map';
  config.plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  );
} else {
  // 生产模式
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash:8].css',
    })
  );
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
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  };
}

module.exports = config;