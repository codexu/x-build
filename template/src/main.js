import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/router/permission';
import '@/directive';
// 加载全局组件
import '@/components';

// css
import 'normalize.css';
import '@/styles/global.scss';

// 拦截器
import '@/libs/filters';

// * mock 数据 (上线前请删除此项!)
// import '@/mock';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
