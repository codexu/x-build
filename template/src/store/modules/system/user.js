// 存储用户信息
import storage from 'store';

export default {
  namespaced: true,
  state: {
    info: {}, // 用户信息
  },
  mutations: {
    /**
     * 设置用户信息
     * @param {Object}} 登陆请求返回的用户信息，应包含 token
     */
    SET_INFO: (state, info) => {
      state.info = info;
      storage.set('USER_ID', info.id);
      storage.set('ACCESS_TOKEN', info.token);
    },
    // 清空用户信息
    CLEAR_INFO: (state) => {
      state.info = {};
      storage.remove('USER_ID');
      storage.remove('ACCESS_TOKEN');
    },
  },
  actions: {
    // 获取用户信息，通过 本地存储的 USER_ID 判断
    getInfo: ({ state }) => {
      const userID = storage.get('USER_ID');
      if (Object.keys(state.info).length === 0 && userID) {
        // 异步调用查询用户信息接口
      }
    },
  },
  getters: {
    // 返回用户 token
    token: (state) => state.info.token,
  },
};
