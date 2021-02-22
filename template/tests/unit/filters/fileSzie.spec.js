import fileSize from '@/libs/filters/fileSize';

// 文件大小格式化
describe('@/src/libs/filter => fileSize(value)', () => {
  // 无参数返回 0
  test('fileSize()', () => {
    expect(fileSize()).toBe('0Bytes');
  });
  test('fileSize(1000)', () => {
    expect(fileSize(1024)).toBe('1.00KB');
  });
  test('fileSize(1024 * 1024)', () => {
    expect(fileSize(1024 * 1024)).toBe('1.00MB');
  });
});
