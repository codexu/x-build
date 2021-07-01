export type useClipboardResult = {
  copyText: (text: string) => void;
}

const createElement = () => {
  const el = document.createElement('div');
  el.style.whiteSpace = 'pre';
  return el;
};

const useClipboard = (): useClipboardResult => {
  const el = createElement();
  const copyText = (text?: string) => {
    if (!text) return;
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    el.textContent = text;
    document.body.appendChild(el);
    range.selectNode(el);
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand('Copy');
    } catch (error) {
      console.error('copy failed!');
    }
    selection.removeAllRanges();
    el.textContent = '';
    document.body.removeChild(el);
  };
  return { copyText };
};

export default useClipboard;
