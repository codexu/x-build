import UaParser from 'ua-parser-js';

export default {
  namespaced: true,
  state: {
    // 用户 UA
    ua: {},
  },
  mutations: {
    /**
     * @description 记录 UA
     * @param {Object} state state
     */
    SET_UA(state) {
      state.ua = new UaParser().getResult();
    },
  },
};
