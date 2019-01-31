const rem = (isRem) => {
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

module.exports = rem;