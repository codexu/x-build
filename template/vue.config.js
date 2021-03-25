/* eslint-disable @typescript-eslint/no-var-requires */

const pkg = require('./package.json');

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
};
