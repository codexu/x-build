const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Package = require('../package.json');

const config = {
  entry: {
    bundle: ['./src/script/index.js', './src/style/index.styl']
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      'src': path.resolve('./src'),
      '@': path.resolve('./src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./app.pug`
    })
  ]
};

// 遍历dependencies并添加在entry
for (let key in Package.dependencies) {
  if (Package.dependencies.hasOwnProperty(key)) {
    config.entry.bundle.push(key);
  }
}

module.exports = config;