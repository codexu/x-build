import { RouteRecordRaw } from 'vue-router';
import { frameIn } from '@/router/routes';

export type MenuType = RouteRecordRaw[];

export interface StateType {
  menu: MenuType;
  routes: MenuType;
  searchKeyword: string;
  keys: Array<string>;
}

const state: StateType = {
  menu: [], // 菜单管理
  routes: frameIn, // 具有权限的路由
  searchKeyword: '', // 搜索关键词
  keys: ['fullTitle', 'fullPath', 'path', 'name'], // 模糊查询的匹配 keys
};

export default state;
