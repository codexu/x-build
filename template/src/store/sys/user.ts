import { defineStore } from 'pinia';
import storage from 'store';
import router from '@/router';
import UaParser, { IResult as UaResult } from 'ua-parser-js';

export interface UserState {
  userInfo: UserInfo;
  ua: UaResult;
}

export interface UserInfo {
  id: string;
  token: string;
  name?: string;
  avatar?: string;
  roles?: string[];
}

const defaultUserInfo = {
  id: '',
  token: '',
  name: '',
  avatar: '',
  roles: [],
};

export const useUserStore = defineStore({
  id: 'PageExample',
  state: (): UserState => ({
    userInfo: { ...defaultUserInfo },
    ua: new UaParser().getResult(),
  }),
  actions: {
    setUserInfo(payload: UserInfo) {
      this.userInfo = payload;
      storage.set('USER_ID', payload.id);
      storage.set('ACCESS_TOKEN', payload.token);
    },
    resetUserInfo() {
      this.userInfo = { ...defaultUserInfo };
    },
    async getUserInfo() {
      const userID = storage.get('USER_ID');
      if (!userID) {
        // 异步调用查询用户信息接口
      }
    },
    async login() {
      // 调用登陆接口
      // this.setUserInfo(payload);
      // router.push({ path: '/' });
    },
    async logout() {
      // 调用退出登陆接口
      this.resetUserInfo();
      router.push({ name: 'Login' });
    },
    async verification(token: string) {
      // 调用 token 验证接口
      return Promise.resolve(token);
    },
  },
});
