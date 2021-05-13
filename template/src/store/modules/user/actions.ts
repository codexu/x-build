import { ActionTree, ActionContext } from 'vuex';
import storage from 'store';
import router from '@/router';
import { RootState } from '@/store';
import md5 from 'md5';
import { StateType } from './state';
import { Mutations } from './mutations';
import MutationTypes from './mutation-types';
import ActionTypes from './action-types';

interface LoginType {
  username: string;
  password: string;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<StateType, RootState>, 'commit'>

export interface Actions {
  [ActionTypes.getUserInfo]({ commit }: AugmentedActionContext): void;
  [ActionTypes.login]({ commit }: AugmentedActionContext, payload: LoginType): void;
  [ActionTypes.logout]({ commit }: AugmentedActionContext): void;
  [ActionTypes.verification]({ commit }: AugmentedActionContext, payload: string): void;
}

export const actions: ActionTree<StateType, RootState> & Actions = {
  // 异步调用查询用户信息接口
  [ActionTypes.getUserInfo]({ commit }) {
    const userID = storage.get('USER_ID');
    if (!userID) {
      commit(MutationTypes.setInfo, {});
    }
  },
  [ActionTypes.login]({ commit }, { username = '', password = '' }) {
    const data = {
      id: username,
      token: md5(username + password),
    };
    // 调用登陆接口
    commit(MutationTypes.setInfo, data);
    router.push({ path: '/' });
  },
  [ActionTypes.logout]({ commit }) {
    // 调用退出登陆接口
    commit(MutationTypes.setInfo, {});
    router.push({ name: 'Login' });
  },
  [ActionTypes.verification](_, token) {
    // 调用 token 验证接口
    return Promise.resolve(token);
  },
};
