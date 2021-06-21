export default function (titleText: string) {
  const processTitle = process.env.VUE_APP_TITLE || 'X-BUILD';
  window.document.title = `${titleText ? `${titleText} | ` : ''} ${processTitle}`;
}
