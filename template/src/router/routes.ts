import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/layouts/BasicLayout/index.vue';

// 主框架内显示的路由
export const frameIn: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/example',
    component: BasicLayout,
    children: [
      {
        path: 'example',
        name: 'Example',
        component: () => import(/* webpackChunkName: "example" */ '@/views/example/index.vue'),
        meta: {
          title: '示例',
        },
      },
    ],
  },
];

// 主框架外显示的路由
const frameOut = [
  {
    path: '/user/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/system/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
];

const errorPage = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '@/views/system/error/404.vue'),
  },
];

export default [
  ...frameIn,
  ...frameOut,
  ...errorPage,
];
