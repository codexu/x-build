export default function baseApiUrl(port?: number) {
  const { BASE_URL } = import.meta.env;
  if (port) {
    return `${BASE_URL}:${port}`;
  }
  return BASE_URL;
}
