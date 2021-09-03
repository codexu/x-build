// 处理静态资源链接
export default function baseStaticUrl(src = '') {
  const { VITE_APP_STATIC_URL } = import.meta.env;
  if (src) {
    return `${VITE_APP_STATIC_URL}${src}`;
  }
  return VITE_APP_STATIC_URL as string;
}
