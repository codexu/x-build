import {
  Store as VuexStore, Module, CommitOptions, DispatchOptions,
} from 'vuex';
import { RootState } from '@/store';
import { mutations, Mutations } from './mutations';
import { actions, Actions } from './actions';
import state, { StateType } from './state';

export { default as MutationTypes } from './mutation-types';
export { default as ActionTypes } from './action-types';

export type Store<S = StateType> = Omit<VuexStore<S>, 'commit' | 'dispatch'>
  & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions
    ): ReturnType<Mutations[K]>;
  }
  & {
    dispatch<K extends keyof Actions>(
      key: K,
      payload: Parameters<Actions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<Actions[K]>;
  }

const store: Module<StateType, RootState> = {
  state,
  mutations,
  actions,
};

export default store;
