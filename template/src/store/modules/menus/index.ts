import {
  Store as VuexStore, Module, CommitOptions,
} from 'vuex';
import { mutations, Mutations } from './mutations';
import state, { StateType } from './state';
import getters, { Getters } from './getters';

export { default as MutationTypes } from './mutation-types';

export type Store<S = StateType> = Omit<VuexStore<S>, 'commit' | 'getter'>
  & {
    getters: {
      [K in keyof Getters]: ReturnType<Getters[K]>;
    };
  }
  & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions
    ): ReturnType<Mutations[K]>;
  }

const store: Module<StateType, null> = {
  state,
  mutations,
  getters,
};

export default store;
