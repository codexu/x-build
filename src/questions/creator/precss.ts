export default {
  name: 'precss',
  type: 'list',
  message: '选择 CSS 预处理器',
  choices: [
    { name: 'Sass/Scss', value: 'scss' },
    { name: 'Less', value: 'less' },
    { name: '不使用', value: '' },
  ],
}