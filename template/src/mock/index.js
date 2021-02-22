import Mock from 'mockjs';

Mock.setup({
  timeout: '500-800',
});

const context = require.context('./services', true, /\.mock.js$/);

context.keys().forEach((key) => {
  Object.keys(context(key)).forEach((paramKey) => {
    Mock.mock(...context(key)[paramKey]);
  });
});
