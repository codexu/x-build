# 样式

## Sass/Scss

默认使用 Scss 作为样式开发的样式语言，查看[Scss文档](https://www.html.cn/doc/sass/)。

> Sass 是一个 CSS 的扩展，它在 CSS 语法的基础上，允许您使用变量 (variables), 嵌套规则 (nested rules), 混合 (mixins), 导入 (inline imports) 等功能，令 CSS 更加强大与优雅。使用 Sass 以及 Compass 样式库 有助于更好地组织管理样式文件，以及更高效地开发项目。

## 全局污染

### 允许的全局样式

全局样式 目录：`@/styles`

- global.scss: 全局样式
- mixins.scss: 全局 Mixins 管理
- variable.scss: 全局变量管理

### 局部样式

尽量保证使用 scoped 局部样式方案。

```vue {1}
<style lang="scss" scoped>
  ...
</style>
```

## 体验优化

- ✅ 页面载入进度条([nprogress@0.2.0](https://github.com/rstacruz/nprogress))
- ✅ 美化滚动条
- ✅ 静态资源加载页面（减少白屏等待时间）

## 移动端 100vh 问题

在发现在移动端的 Chrome、safari 浏览器中，因为浏览器栏和一些导航栏、链接栏导致不一样的呈现。

### 解决方案

使用 vh-check：

在 `main.js` 引入 `@/styles/vh-check.js`;

### 使用 Mixins

在需要设置高度的时候使用 [@include vh](/Css/Mixins)。

```scss
@include vh;
```

### 在 SCSS 中直接使用

```scss
$height: 100vh;
height: $height;
height: calc(#{$height} - var(--browser-address-bar, 0px));
```
