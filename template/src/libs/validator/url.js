export default function url(rule, value, callback) {
  const reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/;
  if (reg.test(value)) {
    callback();
  }
  callback('请输入正确的url');
}
