// 将整数部分逢三一断
export default function number(value) {
  if (!value) {
    return 0;
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  return intPartFormat;
}
