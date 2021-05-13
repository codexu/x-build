import { MutationTree } from 'vuex';
import storage from 'store';
import initState, { StateType, UserInfo } from './state';
import MutationTypes from './mutation-types';

export type Mutations<S = StateType> = {
  [MutationTypes.setInfo](state: S, payload: UserInfo): void;
  [MutationTypes.clearInfo](state: S): void;
}

export const mutations: MutationTree<StateType> & Mutations = {
  [MutationTypes.setInfo](state, payload) {
    state.userInfo = payload;
    storage.set('USER_ID', payload.id);
    storage.set('ACCESS_TOKEN', payload.token);
  },
  [MutationTypes.clearInfo](state) {
    state.userInfo = { ...initState.userInfo };
  },
};
