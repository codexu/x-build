export default {
  name: 'plugins',
  type: 'checkbox',
  message: '选择需要安装的组件',
  choices: [
    { name: '大文件上传', value: 'Uploader' },
    { name: '表格导入/导出', value: 'Excel' },
    { name: '富文本编辑器', value: 'Editor' },
    { name: '代码高亮', value: 'Highlight' },
  ],
}