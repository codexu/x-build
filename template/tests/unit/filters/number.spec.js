import number from '@/libs/filters/number';

// 数值逢三一断
describe('@/src/libs/filter => number(value)', () => {
  // 无参数返回 0
  test('number()', () => {
    expect(number()).toBe(0);
  });
  // 默认，保留两位小数，四舍五入
  test('number(1.2345) = 1.23', () => {
    expect(number(12345)).toBe('12,345');
  });
});
