import { ActionTree, ActionContext } from 'vuex';

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import screenfull from 'screenfull';
import { StateType } from './state';
import { Mutations } from './mutations';
import MutationTypes from './mutation-types';
import ActionTypes from './action-types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<StateType, RootState>, 'commit'>

export interface Actions {
  [ActionTypes.listen]({ commit }: AugmentedActionContext): void;
  [ActionTypes.toggle]({ commit }: AugmentedActionContext): void;
}

export const actions: ActionTree<StateType, RootState> & Actions = {
  [ActionTypes.listen]({ commit }: AugmentedActionContext) {
    if (!screenfull.isEnabled) return;
    screenfull.on('change', () => {
      if (screenfull.isEnabled && !screenfull.isFullscreen) {
        commit(MutationTypes.setActive, false);
      }
    });
  },
  [ActionTypes.toggle]({ commit }: AugmentedActionContext) {
    if (!screenfull.isEnabled) return;
    if (screenfull.isFullscreen) {
      screenfull.exit();
      commit(MutationTypes.setActive, false);
    } else {
      screenfull.request();
      commit(MutationTypes.setActive, true);
    }
  },
};
