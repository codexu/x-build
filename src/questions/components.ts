export const pcComponents = {
  name: 'components',
  type: 'list',
  message: '选择 UI 框架',
  choices: [
    { name: 'Element Plus', value: 'element' },
    { name: 'Ant Design Vue 2.x', value: 'antd' },
    { name: 'Vuetify 3.x', value: 'vuetify' },
  ],
}
export const mobileComponents = {
  name: 'components',
  type: 'list',
  message: '选择 UI 框架',
  choices: [
    { name: 'Vant', value: 'vant' },
    { name: 'NutUI', value: 'nut' },
    { name: 'Varlet', value: 'varlet' },
  ],
}