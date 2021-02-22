export default function (titleText) {
  const processTitle = process.env.VUE_APP_TITLE || 'Mapwhale';
  window.document.title = `${titleText ? `${titleText} | ` : ''} ${processTitle}`;
}
