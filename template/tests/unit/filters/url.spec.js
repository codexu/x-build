import url from '@/libs/filters/url';

// 设置环境变量
process.env.VUE_APP_STATIC_URL = 'https://oss.com/';

// 按照环境变量合并 url
describe('@/src/libs/filter => url(value)', () => {
  // 无参数返回 环境变量 VUE_APP_STATIC_URL
  test('url()', () => {
    expect(url()).toBe('https://oss.com/');
  });
  // 拼接
  test('url(example.jpg)', () => {
    expect(url('example.jpg')).toBe('https://oss.com/example.jpg');
  });
});
