import router from '@/router';
import md5 from 'md5';

// 用户登陆
export default {
  namespaced: true,
  actions: {
    /**
     * 登陆
     * @param {*} { commit }
     */
    login({ commit }, { username = '', password = '' }) {
      // 调用登陆接口
      commit('system/user/SET_INFO', {
        id: username,
        token: md5(username + password),
      }, { root: true });
      router.push({ path: '/' });
    },
    logout({ commit }) {
      // 调用退出登陆接口
      commit('system/user/CLEAR_INFO', null, { root: true });
      router.push({ name: 'Login' });
    },
    verification(o, token) {
      // 调用 token 验证接口
      console.log(token);
      // return tokenVerification(token);
    },
  },
};
