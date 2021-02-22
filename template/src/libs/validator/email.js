export default function email(rule, value, callback) {
  const reg = /^([a-z0-9_\\.-]+)@([\da-z\\.-]+)\.([a-z\\.]{2,6})$/;
  if (reg.test(value)) {
    callback();
  } else {
    callback('请输入正确的邮箱');
  }
}
