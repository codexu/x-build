const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
const pkg = require('./package.json');
const modifyVars = require('./src/styles/antdTheme');
const createThemeColorReplacerPlugin = require('./config/plugin.config');

// 拼接路径
// eslint-disable-next-line global-require
const resolve = (dir) => require('path').join(__dirname, dir);

module.exports = {
  publicPath: process.env.NODE_ENV !== 'development' ? `/${pkg.name}` : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/styles/variable.scss';
        @import '@/styles/themes.scss';
        @import '@/styles/mixins.scss';
        `,
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars,
        },
      },
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.performance.set('hints', false);

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

    // moment 优化
    config
      .plugin('ContextReplacementPlugin')
      .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);

    // gzip
    config
      .plugin('CompressionPlugin')
      .use(CompressionPlugin, []);

    // 包分析工具
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(WebpackBundleAnalyzer.BundleAnalyzerPlugin);
    }
    // 配置 antd 加载的 icon
    config.resolve.alias.set(
      '@ant-design/icons/lib/dist$',
      path.resolve(__dirname, './src/assets/icons.js'),
    );
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap((options) => {
        const option = options[0];
        option.terserOptions.compress.drop_console = true;
        return [option];
      });
    }
  },
  configureWebpack: {
    plugins: [
      createThemeColorReplacerPlugin(),
    ],
  },
};
