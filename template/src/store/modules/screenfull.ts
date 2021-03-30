import { InjectionKey } from 'vue';
import { Mutation, Action, Store } from 'vuex';
import { StoreModuleType } from '@/libs/utils/importAllStore';
import screenfull from 'screenfull';

export interface ScreenfullState {
  active: boolean;
}

export const screenfullKey: InjectionKey<Store<ScreenfullState>> = Symbol('screenfullKey');

export interface ModuleType extends StoreModuleType<ScreenfullState> {
  state: ScreenfullState;
  mutations: {
    SET_ACTIVE: Mutation<ScreenfullState>;
  };
  actions: {
    listen: Action<ScreenfullState, ScreenfullState>;
    toggle: Action<ScreenfullState, ScreenfullState>;
  };
}

const initState: ScreenfullState = {
  active: false,
};

const StoreModel: ModuleType = {
  namespaced: true,
  name: 'screenfull',
  state: {
    ...initState,
  },
  mutations: {
    SET_ACTIVE(state, payload) {
      state.active = payload;
      if (screenfull.isEnabled) {
        if (payload) {
          screenfull.request();
        } else {
          screenfull.exit();
        }
      }
    },
  },
  actions: {
    listen({ commit }) {
      if (!screenfull.isEnabled) return;
      screenfull.on('change', () => {
        if (screenfull.isEnabled && !screenfull.isFullscreen) {
          commit('set', false);
        }
      });
    },
    toggle({ commit }) {
      if (!screenfull.isEnabled) return;
      if (screenfull.isFullscreen) {
        screenfull.exit();
        commit('set', false);
      } else {
        screenfull.request();
        commit('set', true);
      }
    },
  },
};

export default StoreModel;
