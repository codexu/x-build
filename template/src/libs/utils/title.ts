export default function (titleText: string) {
  const processTitle = process.env.VUE_APP_TITLE || 'Mapwhale';
  window.document.title = `${titleText ? `${titleText} | ` : ''} ${processTitle}`;
}
