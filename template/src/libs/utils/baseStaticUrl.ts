// 处理静态资源链接
export default function baseStaticUrl(src = '') {
  const { STATIC_URL } = import.meta.env;
  if (src) {
    return `${STATIC_URL}${src}`;
  }
  return STATIC_URL as string;
}
