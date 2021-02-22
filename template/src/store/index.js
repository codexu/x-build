import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((module, modulePath) => {
  const MODULES = { ...module };
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  MODULES[moduleName] = value.default;
  return MODULES;
}, {});

export default new Vuex.Store({
  modules,
});
