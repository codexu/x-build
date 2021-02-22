export default {
  namespaced: true,
  state: {
    spinning: false,
    tip: 'Loading',
  },
  mutations: {
    OPEN(state, text) {
      state.spinning = true;
      state.tip = text;
    },
    CLOSE(state) {
      state.spinning = false;
      state.tip = '';
    },
    SET_TIP(state, val) {
      state.tip = val;
    },
  },
};
