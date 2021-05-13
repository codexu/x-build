import { MutationTree } from 'vuex';
import screenfull from 'screenfull';
import { StateType } from './state';
import MutationTypes from './mutation-types';

export type Mutations<S = StateType> = {
  [MutationTypes.setActive](state: S, payload: boolean): void;
}

export const mutations: MutationTree<StateType> & Mutations = {
  [MutationTypes.setActive](state, payload) {
    state.active = payload;
    if (screenfull.isEnabled) {
      if (payload) {
        screenfull.request();
      } else {
        screenfull.exit();
      }
    }
  },
};
