export function min(params, msg = '') {
  return ((rule, value, callback) => {
    if (value <= params) {
      callback();
    }
    callback(`${msg}必须小于${params}`);
  });
}

export function max(params, msg = '') {
  return ((rule, value, callback) => {
    if (value >= params) {
      callback();
    }
    callback(`${msg}必须大于${params}`);
  });
}

export function range(params = { min: 6, max: 18 }, msg = '') {
  return ((rule, value, callback) => {
    if (value >= params.min && value <= params.max) {
      callback();
    }
    callback(`${msg}必须大于${params.min}且小于${params.max}`);
  });
}

export function integer(rule, value, callback) {
  const reg = /^-?[0-9]\d*$/;
  if (reg.test(value)) {
    callback();
  }
  callback('请输入整数');
}

// 两位小数
export function decimal(rule, value, callback) {
  const reg = /\d{1,}\.\d{2}$/;
  if (reg.test(value)) {
    callback();
  }
  callback('小数且保留两位小数');
}
