import { RouteRecordRaw, _RouteRecordBase } from 'vue-router';
import { Mutation, Getter } from 'vuex';
import Fuse from 'fuse.js';
import { StoreModuleType } from '@/libs/utils/importAllStore';
import { frameIn } from '@/router/routes';

export interface MenusState {
  menu: Array<RouteRecordRaw>;
  routes: Array<RouteRecordRaw>;
  searchKeyword: string;
  keys: Array<string>;
}

export interface PoolType extends _RouteRecordBase{
  fullTitle: string;
  fullPath: string;
}

export interface ModuleType extends StoreModuleType<MenusState> {
  state: MenusState;
  mutations: {
    SET_MENU: Mutation<MenusState>;
    SET_SEARCH_KEYWORD: Mutation<MenusState>;
  };
  getters: {
    routesPool: Getter<MenusState, MenusState>;
    search: Getter<MenusState, MenusState>;
  };
}

const initState: MenusState = {
  menu: [], // 菜单管理
  routes: frameIn, // 具有权限的路由
  searchKeyword: '', // 搜索关键词
  keys: ['fullTitle', 'fullPath', 'path', 'name'], // 模糊查询的匹配 keys
};

const StoreModel: ModuleType = {
  namespaced: true,
  name: 'menus',
  state: {
    ...initState,
  },
  mutations: {
    // 设置菜单
    SET_MENU: (state, menu) => {
      state.menu = menu;
    },
    // 设置搜索关键字，同时联动触发 getters.search 返回搜索结果
    SET_SEARCH_KEYWORD: (state, searchKeyword: string) => {
      state.searchKeyword = searchKeyword;
    },
  },
  getters: {
    // 将 state.routes 中的路由扁平化成为 一维数组，并添加两条新属性
    routesPool: (state) => {
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
    search(state, getters) {
      const fuse = new Fuse(getters.routesPool, {
        keys: state.keys,
      });
      return fuse.search(state.searchKeyword);
    },
  },
};

export default StoreModel;
