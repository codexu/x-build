import remainin from '@/libs/filters/remainin';

// 剩余时间格式化 秒
describe('@/src/libs/filter => remainin(value)', () => {
  // 无参数返回 0
  test('remainin()', () => {
    expect(remainin()).toBe('-');
  });
  // 5s
  test('remainin(5)', () => {
    expect(remainin(5)).toBe('00时00分05秒');
  });
  // 15s
  test('remainin(15)', () => {
    expect(remainin(15)).toBe('00时00分15秒');
  });
  // 1min
  test('remainin(60)', () => {
    expect(remainin(60)).toBe('00时01分00秒');
  });
  // 15min
  test('remainin(60 * 15)', () => {
    expect(remainin(60 * 15)).toBe('00时15分00秒');
  });
  // 1h
  test('remainin(60 * 60 * 1)', () => {
    expect(remainin(60 * 60 * 1)).toBe('01时00分00秒');
  });
  // 15h
  test('remainin(60 * 60 * 15)', () => {
    expect(remainin(60 * 60 * 15)).toBe('15时00分00秒');
  });
});
