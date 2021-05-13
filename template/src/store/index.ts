import {
  createStore,
  createLogger,
} from 'vuex';
import { importAllStore } from '@/libs/utils/importAllStore';
import { Store as ExampleStore } from '@/views/example/store';
import { StateType as ExampleState } from '@/views/example/store/state';
import { Store as LogsStore } from './modules/logs';
import { StateType as LogsState } from './modules/logs/state';
import { Store as MenusStore } from './modules/menus';
import { StateType as MenusState } from './modules/menus/state';
import { Store as UserStore } from './modules/user';
import { StateType as UserState } from './modules/user/state';
import { Store as ScreenfullStore } from './modules/screenfull';
import { StateType as ScreenfullState } from './modules/screenfull/state';

export interface RootState {
  example: ExampleState;
  user: UserState;
  logs: LogsState;
  menus: MenusState;
  screenfull: ScreenfullState;
}

export type Store = ExampleStore<Pick<RootState, 'example'>>
  & LogsStore<Pick<RootState, 'logs'>>
  & MenusStore<Pick<RootState, 'menus'>>
  & UserStore<Pick<RootState, 'user'>>
  & ScreenfullStore<Pick<RootState, 'screenfull'>>

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: importAllStore(),
});

export function useStore(): Store {
  return store as Store;
}
