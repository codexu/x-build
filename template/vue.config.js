/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const pkg = require('./package.json');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  publicPath: process.env.NODE_ENV !== 'development' ? `/${pkg.name}` : '/',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/styles/variable.scss';
        @import '@/styles/mixins.scss';
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [{
      languages: ['javascript', 'css', 'html', 'typescript', 'json', 'cpp', 'java', 'go', 'python'],
    }]);
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader');
  },
};
