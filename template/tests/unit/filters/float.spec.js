import float from '@/libs/filters/float';

// 浮点型位数保留
describe('@/src/libs/filter => float(value, precision, type)', () => {
  // 无参数返回 0
  test('float()', () => {
    expect(float()).toBe(0);
  });
  // 默认，保留两位小数，四舍五入
  test('float(1.2345) = 1.23', () => {
    expect(float(1.2345)).toBe(1.23);
  });
  // 保留 2 位小数，四舍五入
  test('float(1.2345, 3, round)', () => {
    expect(float(1.2345, 3)).toBe(1.235);
  });
  // 保留 2 位小数，向上取整
  test('float(1.2345, 3, ceil)', () => {
    expect(float(1.2345, 3, 'ceil')).toBe(1.235);
  });
  // 保留 2 位小数，向下取整
  test('float(1.2345, 3, floor)', () => {
    expect(float(1.2345, 3, 'floor')).toBe(1.234);
  });
});
