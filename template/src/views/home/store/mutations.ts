import { MutationTree } from 'vuex';
import { StateType } from './state';
import MutationTypes from './mutation-types';

export type Mutations<S = StateType> = {
  [MutationTypes.setTitle](state: S, payload: string): void;
}

export const mutations: MutationTree<StateType> & Mutations = {
  [MutationTypes.setTitle](state, payload) {
    state.title = payload;
  },
};
