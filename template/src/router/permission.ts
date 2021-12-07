import storage from 'store';
import NProgress from 'nprogress';
import router from '@/router';
import { useUserStore } from '@/stores/user';
import { setTitle } from '@/libs/utils';

// 进度条
import 'nprogress/nprogress.css';

const loginRoutePath = '/user/login';
const defaultRoutePath = '/home';
/**
 * 路由拦截
 * 权限验证
 */

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const token = storage.get('ACCESS_TOKEN');

  // 进度条
  NProgress.start();
  // 验证当前路由所有的匹配中是否需要有登录验证的
  if (to.matched.some((r) => r.meta.auth)) {
    // 是否存有token作为验证是否登录的条件
    if (token && token !== 'undefined') {
      if (to.path === loginRoutePath) {
        next({ path: defaultRoutePath });
      } else {
        next();
      }
    } else {
      // 没有登录的时候跳转到登录界面
      // 携带上登录成功之后需要跳转的页面完整路径
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath,
        },
      });
      NProgress.done();
    }
  } else {
    // 不需要身份校验 直接通过
    next();
  }
});

router.afterEach((to) => {
  // 进度条
  NProgress.done();
  setTitle(to.meta.title as string);
});
