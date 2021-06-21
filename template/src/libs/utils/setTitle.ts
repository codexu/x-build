export default function (title?: string) {
  const processTitle = process.env.VUE_APP_TITLE || 'X-BUILD';
  window.document.title = `${title ? `${title} | ` : ''} ${processTitle}`;
}
