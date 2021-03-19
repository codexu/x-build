module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => `element-plus/lib/theme-chalk/${name}.css`,
      },
    ],
  ],
};
