const files = require.context('./', true, /\.js$/);
const modules = {};

function checkIndex(name) {
  return name !== './index.js'
}

files.keys().filter(checkIndex).forEach(key => {
  modules[/(?<=\/)[^\/\.js]+(?=\.js)/.exec(key)] = files(key).default;
})

export default modules;