import {
  createStore,
  createLogger,
} from 'vuex';
import { importAllStore } from '@/libs/utils/importAllStore';
import { Store as HomeStore } from '@/views/home/store';
import { StateType as HomeState } from '@/views/home/store/state';
import { UserState } from './modules/user';
import { LogsState } from './modules/logs';
import { MenusState } from './modules/menus';
import { ScreenfullState } from './modules/screenfull';

export interface RootState {
  name: string;
  version: string;
}

export interface AllStateTypes extends RootState {
  home: HomeState;
  user: UserState;
  logs: LogsState;
  menus: MenusState;
  screenfull: ScreenfullState;
}

export type Store = HomeStore<Pick<AllStateTypes, 'home'>>

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: importAllStore(),
});

export function useStore(): Store {
  return store as Store;
}
