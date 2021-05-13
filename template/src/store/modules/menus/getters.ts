import { RouteRecordRaw, _RouteRecordBase } from 'vue-router';
import { GetterTree } from 'vuex';
import Fuse from 'fuse.js';
import { StateType } from './state';

export interface PoolType extends _RouteRecordBase {
  fullTitle: string;
  fullPath: string;
}

export type Getters = {
  routesPool(state: StateType): PoolType[];
  search(state: StateType): Fuse.FuseResult<unknown>[];
};

const getters: GetterTree<StateType, null> = {
  // 将 state.routes 中的路由扁平化成为 一维数组，并添加两条新属性
  routesPool: (state: StateType) => {
    const pool: Array<PoolType> = [];
    const push = (
      menus: Array<RouteRecordRaw>,
      titlePrefix: Array<string | unknown> = [],
      pathPrefix: Array<string | unknown> = [],
    ) => {
      menus.forEach((menu) => {
        if (menu.children) {
          if (menu.meta && menu.meta.title) {
            push(menu.children, [...titlePrefix, menu.meta.title], [...pathPrefix, menu.path]);
            pool.push({
              ...menu,
              fullTitle: [...titlePrefix, menu.meta.title].join('/'),
              fullPath: [...pathPrefix, menu.path].join('/'),
            });
          } else {
            push(menu.children, [...titlePrefix, []], []);
          }
        } else if (menu.meta && menu.meta.title) {
          pool.push({
            ...menu,
            fullTitle: [...titlePrefix, menu.meta.title].join('/'),
            fullPath: [...pathPrefix, menu.path].join('/'),
          });
        }
      });
    };
    push(state.routes);
    return pool;
  },
  // 通过 SET_SEARCH_KEYWORD 进行路由的模糊查询，查询基于 routesPool 的数据。
  search(state: StateType, getter) {
    const fuse = new Fuse(getter.routesPool, {
      keys: state.keys,
    });
    const result = fuse.search(state.searchKeyword);
    return result;
  },
};

export default getters;
