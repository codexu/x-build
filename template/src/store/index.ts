import {
  createStore,
  createLogger,
} from 'vuex';
import { importAllStore } from '@/libs/utils/importAllStore';
import { Store as ExampleStore } from '@/views/example/store';
import { StateType as ExampleState } from '@/views/example/store/state';
import { UserState } from './modules/user';
import { LogsState } from './modules/logs';
import { MenusState } from './modules/menus';
import { ScreenfullState } from './modules/screenfull';

export interface RootState {
  name: string;
  version: string;
}

export interface AllStateTypes extends RootState {
  example: ExampleState;
  user: UserState;
  logs: LogsState;
  menus: MenusState;
  screenfull: ScreenfullState;
}

export type Store = ExampleStore<Pick<AllStateTypes, 'example'>>

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: importAllStore(),
});

export function useStore(): Store {
  return store as Store;
}
