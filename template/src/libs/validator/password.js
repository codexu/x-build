export function password(illegal = true, range = { min: 6, max: 18 }) {
  return ((rule, value, callback) => {
    if (illegal) {
      if (/[^\w\s]+/.test(value)) {
        callback('存在非法字符');
      } else if (value.length > range.max || value.length < range.min) {
        callback(`长度为${range.min}-${range.max}`);
      } else {
        callback();
      }
    } else if (value.length > range.max || value.length < range.min) {
      callback(`长度为${range.min}-${range.max}`);
    } else {
      callback();
    }
  });
}

export function confirmPassword(params) {
  return ((rule, value, callback) => {
    if (params === value) {
      callback();
    }
    callback('两次密码不一致');
  });
}
