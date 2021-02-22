# 切换主题颜色

## state

- **theme** `String` 切换主题深色系 || 浅色系
  - light：浅色系
  - dark：深色系

- **color** `String` 切换主题色
  - 颜色单词：red等
  - 十六进制颜色：#F5222D等

- **gradient** `Array` 主题渐变色，根据主题色计算

- **colorList** `Array` 可选的主题色

## mutations

- **TOGGLE_THEME(theme)** 切换深/浅主题
  - theme：`String` 'dark' / 'light'

## actions
- **updatePrimaryColor(color)** 切换主题色调用的方法
  - color：`String` 16进制颜色
