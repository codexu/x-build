module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          // eslint-disable-next-line no-param-reassign
          name = name.slice(3);
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
      },
    ],
  ],
};
