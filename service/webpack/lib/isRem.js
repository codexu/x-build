const path = require('path');
const config = require(path.resolve(`${process.cwd()}/config.json`));

const rem = (isRem) => {
  if (isRem) {
    return {
      loader: 'px2rem-loader',
      options: {
        remUnit: config.remUnit,
        remPrecision: 8
      }
    };
  } else {
    return 'postcss-loader';
  }
};

module.exports = rem;