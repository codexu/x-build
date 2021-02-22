import date from '@/libs/filters/date';

// 时间戳格式化
describe('@/src/libs/filter => date(value)', () => {
  // 无参数返回 0
  test('date()', () => {
    expect(date()).toBe('-');
  });
  // 取一个时间戳 1604994020866
  test('date()', () => {
    expect(date(1604994020866)).toBe('2020-11-10 15:40:20');
  });
});
