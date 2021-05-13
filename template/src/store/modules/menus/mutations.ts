import { MutationTree } from 'vuex';
import { StateType, MenuType } from './state';
import MutationTypes from './mutation-types';

export type Mutations<S = StateType> = {
  [MutationTypes.setMenu](state: S, payload: MenuType): void;
  [MutationTypes.setKeyword](state: S, payload: string): void;
}

export const mutations: MutationTree<StateType> & Mutations = {
  [MutationTypes.setMenu](state, payload) {
    state.menu = payload;
  },
  [MutationTypes.setKeyword](state, payload) {
    state.searchKeyword = payload;
  },
};
