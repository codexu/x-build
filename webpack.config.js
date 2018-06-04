const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Package = require('./package.json');

const isDev = process.env.NODE_ENV === 'development' ? true : false;
const isRem = Package.rem;
const rem = () => {
  if (isRem) {
    return {
      loader: 'px2rem-loader',
      options: {
        remUnit: 40,
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
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name][hash].[ext]',
            outputPath: 'static/images/'
          }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.${Package.template}`
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