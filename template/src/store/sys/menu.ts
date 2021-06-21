import { defineStore } from 'pinia';
import { RouteRecordRaw, _RouteRecordBase } from 'vue-router';
import Fuse from 'fuse.js';
import { frameIn } from '@/router/routes';

export interface MenuState{
  menu: RouteRecordRaw[];
  routes: RouteRecordRaw[];
  searchKeyword: string;
}

interface PoolRouteRecordRow extends _RouteRecordBase {
  fullTitle: string;
  fullPath: string;
}

export const useMenuStore = defineStore({
  id: 'log',
  state: (): MenuState => ({
    menu: [], // 菜单管理
    routes: frameIn, // 具有权限的路由
    searchKeyword: '', // 搜索关键词
  }),
  actions: {
    // 设置菜单
    setMenu(routes: RouteRecordRaw[]) {
      this.menu = routes;
    },
    setSearchKeyword(keyword: string) {
      this.searchKeyword = keyword;
    },
  },
  getters: {
    routesPool() {
      const pool: PoolRouteRecordRow[] = [];
      function routesPool(
        menus: RouteRecordRaw[],
        titlePrefix: string[] = [],
        pathPrefix: string[] = [],
      ) {
        menus.forEach((menu) => {
          if (menu.children) {
            const { meta } = menu;
            if (meta) {
              const currentTitlePrefix = [...titlePrefix];
              const { title } = meta;
              if (title) currentTitlePrefix.push(title as string);
              routesPool(menu.children, currentTitlePrefix, [...pathPrefix, menu.path]);
              pool.push({
                ...menu,
                fullTitle: [...titlePrefix, menu.meta?.title].join('/'),
                fullPath: [...pathPrefix, menu.path].join('/'),
              });
            } else {
              routesPool(menu.children, titlePrefix, []);
            }
          } else {
            pool.push({
              ...menu,
              fullTitle: [...titlePrefix, menu.meta?.title].join('/'),
              fullPath: [...pathPrefix, menu.path].join('/'),
            });
          }
        });
      }
      routesPool(this.routes);
      return pool;
    },
    // 通过 setSearchKeyword 进行路由的模糊查询，查询基于 routesPool 的数据。
    searchRoutes() {
      let searchResult: Fuse.FuseResult<PoolRouteRecordRow>[] = [];
      const options = {
        keys: ['fullTitle', 'fullPath', 'path', 'name'],
      };
      const fuse: Fuse<PoolRouteRecordRow> = new Fuse(this.routesPool, options);
      searchResult = fuse.search(this.searchKeyword);
      return searchResult;
    },
  },
});
