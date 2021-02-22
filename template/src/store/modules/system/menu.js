import { frameIn } from '@/router/routes';
import Fuse from 'fuse.js';

export default {
  namespaced: true,
  state: {
    menu: [], // 菜单管理
    routes: frameIn, // 具有权限的路由
    searchKeyword: '', // 搜索关键词
    keys: ['fullTitle', 'fullPath', 'path', 'name'], // 模糊查询的匹配 keys
  },
  mutations: {
    /**
     * 设置菜单
     * @param {Object}} 设置要在导航上面显示的菜单信息
     */
    SET_MENU: (state, menu) => {
      state.menu = menu;
    },
    /**
     * 设置搜索关键字，同时联动触发 getters.search 返回搜索结果。
     * @param {Object}} 搜索关键字
     */
    SET_SEARCH_KEYWORD: (state, searchKeyword) => {
      state.searchKeyword = searchKeyword;
    },
  },
  getters: {
    /**
     * 将 state.routes 中的路由扁平化成为 一维数组，并添加两条新属性
     *
     * @return {fullTitle} 将层级关系对应的 meta.title 以 / 分割展示
     * @return {fullPath} 将层级关系对应的 path 形成完整的 URL
     */
    routesPool: (state) => {
      const pool = [];
      const push = (menu, titlePrefix = [], pathPrefix = []) => {
        menu.forEach((m) => {
          if (m.children) {
            if ('meta' in m) {
              push(m.children, [...titlePrefix, m.meta.title], [...pathPrefix, m.path]);
              pool.push({
                ...m,
                fullTitle: [...titlePrefix, m.meta.title].join('/'),
                fullPath: [...pathPrefix, m.path].join('/'),
              });
            } else {
              push(m.children, [...titlePrefix, []], []);
            }
          } else {
            pool.push({
              ...m,
              fullTitle: [...titlePrefix, m.meta.title].join('/'),
              fullPath: [...pathPrefix, m.path].join('/'),
            });
          }
        });
      };
      push(state.routes);
      return pool;
    },
    // 通过 SET_SEARCH_KEYWORD 进行路由的模糊查询，查询基于 routesPool 的数据。
    search(state, getters) {
      const fuse = new Fuse(getters.routesPool, {
        keys: state.keys,
      });
      return fuse.search(state.searchKeyword);
    },
  },
};
