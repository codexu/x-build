const files = require.context('./', true, /\.js$/);
const modules = {};

function checkIndex(name) {
  return name !== './index.js';
}

files.keys().filter(checkIndex).forEach(key => {
  modules[key.replace(/(.*\/)*([^.]+).js/ig, '$2')] = files(key).default;
});

export default modules;