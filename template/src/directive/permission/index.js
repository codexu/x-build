function checkPermission(el, { value }) {
  if (!value && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

export default {
  inserted(el, binding) {
    checkPermission(el, binding);
  },
  update(el, binding) {
    checkPermission(el, binding);
  },
};
