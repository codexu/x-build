// 处理静态资源链接
export default function url(src) {
  if (src) {
    return `${process.env.VUE_APP_STATIC_URL}${src}`;
  }
  return process.env.VUE_APP_STATIC_URL;
}
