export default function (title?: string) {
  const { TITLE } = import.meta.env;
  const processTitle = TITLE || 'X-BUILD';
  window.document.title = `${title ? `${title} | ` : ''} ${processTitle}`;
}
