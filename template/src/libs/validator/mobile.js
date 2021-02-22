export function mobile(rule, value, callback) {
  const reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
  if (reg.test(value)) {
    callback();
  }
  callback('请输入正确的手机号');
}

export function landline(rule, value, callback) {
  const reg = /^0\d{2,3}-?\d{7,8}$/;
  if (reg.test(value)) {
    callback();
  }
  callback('请输入正确的固话号码');
}
