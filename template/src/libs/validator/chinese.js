export default function chinese(rule, value, callback) {
  const reg = /[\u4e00-\u9fa5]/;
  if (reg.test(value)) {
    callback();
  } else {
    callback('请输入中文');
  }
}
