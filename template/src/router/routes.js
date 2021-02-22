import BasicLayout from '@/layouts/BasicLayout/index.vue';
// import BlankLayout from '@/layouts/BlankLayout.vue';

// 主框架内显示的路由
export const frameIn = [
  {
    path: '/',
    redirect: '/home',
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: {
          title: '首页',
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
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/system/error/404.vue'),
  },
];

export default [
  ...frameIn,
  ...frameOut,
  ...errorPage,
];
