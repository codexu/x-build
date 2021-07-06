export default {
  name: 'pluginType',
  type: 'list',
  message: '选择要添加的插件类型',
  choices: [
    { name: '组件', value: 'component' },
    { name: 'Hooks', value: 'hook' },
    { name: '指令', value: 'directive' },
  ],
}