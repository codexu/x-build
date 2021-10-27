export default function baseApiUrl(port?: number) {
  const { VITE_APP_BASE_URL } = import.meta.env;
  if (port) {
    return `${VITE_APP_BASE_URL}:${port}`;
  }
  return VITE_APP_BASE_URL;
}
