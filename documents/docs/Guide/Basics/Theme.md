# 更换主题

主题风格分为两个部分：主题色 + 深/浅模式。

## 主题色

### 主题定制

可以通过 `@/styles/antdTheme.js` 定义 modifyVars，完全支持官方提供的 less 变量定制功能：

```js
module.exports = {
  'primary-color': '#F5222D',
  'link-color': '#F5222D',
  'border-radius-base': '4px',
};
```

当修改完毕后，重启环境，即可生效。

参考[定制主题](https://www.antdv.com/docs/vue/customize-theme-cn/)。

### 样式覆盖

Ant Design Vue 的通用样式变量可能无法满足所有定制需求，你需要全局覆盖默认的组件样式。我们可以参照 [样式](/Guide/Basics/Style) 章节来覆盖样式。

### 动态更换主题色

脚手架已经内置动态更换主题色的功能，通过 Vuex 来管理，并且内置了多种主题色。具体使用参考[状态管理 - 切换主题颜色](/Vuex/Theme)。

## 深/浅模式

### 颜色变量

根据设计搞主题颜色定义变量颜色，并使用[状态管理 - 切换主题颜色](/Vuex/Theme)切换主题。

`src/style/theme.scss`

```scss
$themes: (
  // 浅色系
  light: (
    font-color: #051724, // 正文
    notes-color: #666, // 注释
    background-color: #FFFFFF, // 背景色
  ),
  // 深色系
  dark: (
    font-color: #FFFFFF,
    notes-color: #ccc,
    background-color: #1b2531,
  )
);
```

### mixin函数

- **@include fontColor('定义的主题色变量')** `获取字体颜色`
- **@include backgroundColor('定义的主题色变量')** `获取背景颜色`
