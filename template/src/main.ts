import { createApp } from 'vue';
import { components, plugins } from '@/components';
import App from './App.vue';
import store, { key } from './store';
import router from './router';
import '@/router/permission';

// css
import 'normalize.css';
import '@/styles/global.scss';

const app = createApp(App);
app.use(store, key);
app.use(router);
app.mount('#app');

// 加载全局组件
components.forEach((component) => {
  app.component(component.name, component);
});

// 加载全局插件
plugins.forEach((plugin) => {
  app.use(plugin);
});
