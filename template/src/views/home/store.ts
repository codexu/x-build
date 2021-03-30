import { InjectionKey } from 'vue';
import { Mutation, Store } from 'vuex';
import { StoreModuleType } from '@/libs/utils/importAllStore';

export interface HomeState {
  title: string;
}

export const homeKey: InjectionKey<Store<HomeState>> = Symbol('homeKey');

export interface ModuleType extends StoreModuleType<HomeState> {
  state: HomeState;
  mutations: {
    SET_TITLE: Mutation<HomeState>;
  };
}

const initState: HomeState = {
  title: 'X-BUILD FOR VUE3.0',
};

const StoreModel: ModuleType = {
  namespaced: true,
  name: 'home',
  state: {
    ...initState,
  },
  mutations: {
    SET_TITLE(state, payload) {
      state.title = payload;
    },
  },
};

export default StoreModel;
