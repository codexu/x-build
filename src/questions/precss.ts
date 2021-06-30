export default {
  name: 'precss',
  type: 'list',
  message: '选择 CSS 预处理器',
  choices: [
    { name: 'sass/scss', value: 'scss' },
    { name: 'less', value: 'less' },
    { name: 'stylus', value: 'stylus' },
    { name: '不使用任何 CSS 预处理器', value: '' },
  ],
}