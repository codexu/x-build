import storage from 'store';
import client from 'webpack-theme-color-replacer/client';
import generate from '@ant-design/colors/lib/generate';

function getAntdSerials(color) {
  const lightens = new Array(9).fill().map((t, i) => client.varyColor.lighten(color, i / 10));
  // colorPalette变换得到颜色值
  const colorPalettes = generate(color);
  const rgb = client.varyColor.toNum3(color.replace('#', '')).join(',');
  return lightens.concat(colorPalettes).concat(rgb);
}

function setPrimaryColor(gradient) {
  const options = {
    newColors: gradient,
    changeUrl(cssUrl) {
      return `/${cssUrl}`;
    },
  };
  return client.changer.changeColor(options);
}

const PRIMARY_COLOR = storage.get('COLOR') || '#1890FF';
const GRADIENT = getAntdSerials(PRIMARY_COLOR);
setPrimaryColor(GRADIENT);

const THEME = storage.get('THEME') || 'light';
window.document.documentElement.setAttribute('data-theme', THEME);

export default {
  namespaced: true,
  state: {
    theme: THEME, // light or dark
    color: PRIMARY_COLOR, // 主题色
    gradient: GRADIENT, // 主题渐变色
    colorList: [
      { name: '薄暮', color: '#F5222D' },
      { name: '火山', color: '#FA541C' },
      { name: '日暮', color: '#FAAD14' },
      { name: '明青', color: '#13C2C2' },
      { name: '极光绿', color: '#52C41A' },
      { name: '拂晓蓝（默认）', color: '#1890FF' },
      { name: '极客蓝', color: '#2F54EB' },
      { name: '酱紫', color: '#722ED1' },
    ], // 所有主题色
  },
  actions: {
    // 改变主题色
    async updatePrimaryColor({ commit }, color) {
      const gradient = getAntdSerials(color);
      await setPrimaryColor(gradient);
      commit('SET_COLOR', color);
      commit('SET_GRADIENT', gradient);
    },
  },
  mutations: {
    // 切换主题深色系 || 浅色系
    TOGGLE_THEME(state) {
      const TOGGLE_THEME = state.theme === 'light' ? 'dark' : 'light';
      state.theme = TOGGLE_THEME;
      window.document.documentElement.setAttribute('data-theme', TOGGLE_THEME);
      storage.set('THEME', TOGGLE_THEME);
    },
    SET_COLOR(state, payload) {
      state.color = payload;
      storage.set('COLOR', payload);
    },
    SET_GRADIENT(state, payload) {
      state.gradient = payload;
    },
  },
};
