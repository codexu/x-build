import { Mutation, Action } from 'vuex';
import router from '@/router';
import storage from 'store';
import md5 from 'md5';
import { StoreModuleType } from '@/libs/utils/importAllStore';
import UaParser, { IResult as UaResult } from 'ua-parser-js';

export interface UserInfo {
  id: number;
  token: string;
  name: string;
  avatar: string;
  roles: string[];
}

export interface UserState {
  userInfo: UserInfo;
  ua: UaResult;
}

export interface ModuleType extends StoreModuleType<UserState> {
  state: UserState;
  mutations: {
    SET_USER_INFO: Mutation<UserState>;
    CLEAR_INFO: Mutation<UserState>;
  };
  actions: {
    getUserInfo: Action<UserState, UserState>;
    login: Action<UserState, UserState>;
    logout: Action<UserState, UserState>;
    verification: Action<UserState, UserState>;
  };
}

const initState: UserState = {
  userInfo: {
    id: 0,
    token: '',
    name: '',
    avatar: '',
    roles: [],
  },
  ua: new UaParser().getResult(),
};

const StoreModel: ModuleType = {
  namespaced: true,
  name: 'user',
  state: {
    ...initState,
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
      storage.set('USER_ID', payload.id);
      storage.set('ACCESS_TOKEN', payload.token);
    },
    CLEAR_INFO(state) {
      state.userInfo = { ...initState.userInfo };
    },
  },
  actions: {
    async getUserInfo() {
      const userID = storage.get('USER_ID');
      if (!userID) {
        // 异步调用查询用户信息接口
      }
    },
    async login({ commit }, { username = '', password = '' }) {
      // 调用登陆接口
      commit('SET_USER_INFO', {
        id: username,
        token: md5(username + password),
      });
      router.push({ path: '/' });
    },
    async logout({ commit }) {
      // 调用退出登陆接口
      commit('SET_USER_INFO', null, { root: true });
      router.push({ name: 'Login' });
    },
    async verification(o, token) {
      // 调用 token 验证接口
      return Promise.resolve(token);
    },
  },
};

export default StoreModel;
