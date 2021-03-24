/* eslint-disable @typescript-eslint/no-var-requires */

const pkg = require('./package.json');

console.log('[ process.env ] >', process.env.NODE_ENV);

module.exports = {
  publicPath: process.env.NODE_ENV !== 'development' ? `/${pkg.name}` : '/',
  productionSourceMap: false,
};
