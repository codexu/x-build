import Vue from 'vue';

// 按需加载 ant-design-vue 组件
import { Button } from 'ant-design-vue';
// 加载 ant-design-vue 样式文件
// import '@/styles/antd-theme.less';

import MSvg from './m-svg/index.vue';
import MStatic from './m-static/index.vue';
import './m-svg';

// mapwhale 组件
Vue.component(MSvg.name, MSvg);
Vue.component(MStatic.name, MStatic);

// antd
Vue.use(Button);
