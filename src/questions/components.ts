export default {
  name: 'components',
  type: 'list',
  message: '选择使用的组件库',
  choices: [
    { name: 'Element Plus', value: 'element' },
    { name: 'Ant Design Vue 2.x', value: 'antd' },
    { name: '其他', value: '' },
  ],
}