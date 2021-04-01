import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { importAllStore } from '@/libs/utils/importAllStore';
import { HomeState } from '@/views/home/store';
import { UserState } from './modules/user';
import { LogsState } from './modules/logs';
import { MenusState } from './modules/menus';
import { ScreenfullState } from './modules/screenfull';

export interface RootStateTypes {
  name: string;
  version: string;
}

export interface AllStateTypes extends RootStateTypes {
  home: HomeState;
  user: UserState;
  logs: LogsState;
  menus: MenusState;
  screenfull: ScreenfullState;
}

export default createStore({
  modules: importAllStore(),
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store');

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
