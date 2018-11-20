const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config.json');

const _config = {
  entry: {
    bundle: ['./src/script/index.js', './src/style/index.styl']
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve('./dist')
  },
  resolve: {
    alias: {
      'src': path.resolve('./src'),
      '@': path.resolve('./src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./index.pug`
    })
  ]
};

// 遍历dependencies并添加在entry
config.plugins.forEach(item => {
  _config.entry.bundle.push(item);
});
console.log(_config.entry);
module.exports = _config;