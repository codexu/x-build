const isEslint = (eslint) => {
  if (eslint) {
    return ['babel-loader', 'eslint-loader'];
  } else {
    return 'babel-loader';
  }
};

module.exports = isEslint;