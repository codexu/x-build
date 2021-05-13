import {
  createStore,
  createLogger,
} from 'vuex';
import { importAllStore } from '@/libs/utils/importAllStore';
import { Store as ExampleStore } from '@/views/example/store';
import { StateType as ExampleState } from '@/views/example/store/state';
import { Store as LogsStore } from './modules/logs';
import { StateType as LogsState } from './modules/logs/state';
import { UserState } from './modules/user';
import { MenusState } from './modules/menus';
import { StateType as ScreenfullState } from './modules/screenfull/state';

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
  & LogsStore<Pick<AllStateTypes, 'logs'>>

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: importAllStore(),
});

export function useStore(): Store {
  return store as Store;
}
