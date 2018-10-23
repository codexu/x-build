const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Package = require('./package.json');

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
    bundle: ['./src/script/index.js', './src/style/index.styl']
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    alias: {
      'src': path.resolve('src'),
      'vue': 'vue/dist/vue.js',
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [{
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          rem(),
          'postcss-loader',
          'stylus-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
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
      template: `./app.pug`
    })
  ]
};

if (isRem) {
  config.entry.bundle.push('hotcss');
}

for (let key in Package.dependencies) {
  if (Package.dependencies.hasOwnProperty(key)) {
    config.entry.bundle.push(key);
  }
}

if (process.env.NODE_ENV === 'development') {
  // 开发模式
  config.devServer = {
    port: Package.port,
    overlay: {
      errors: true
    },
    hot: true,
    stats:{
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }
  };
  config.devtool = 'cheap-module-eval-source-map';
  config.plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  );
}

// 生产模式
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'bundle.[chunkhash:8].css',
    })
  );
  config.optimization = {
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