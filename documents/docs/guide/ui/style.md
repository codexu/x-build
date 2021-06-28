# 样式

## 预处理器

默认使用 Scss 作为样式开发的样式语言，查看[Scss文档](https://www.html.cn/doc/sass/)。

> Sass 是一个 CSS 的扩展，它在 CSS 语法的基础上，允许您使用变量 (variables), 嵌套规则 (nested rules), 混合 (mixins), 导入 (inline imports) 等功能，令 CSS 更加强大与优雅。使用 Sass 以及 Compass 样式库 有助于更好地组织管理样式文件，以及更高效地开发项目。

## 全局样式

全局样式 目录：`@/styles`

- global.scss: 全局样式
- mixins.scss: 全局 Mixins 管理
- variable.scss: 全局变量管理

## 体验优化

- 使用 [nprogress@0.2.0](https://github.com/rstacruz/nprogress) 美化页面载入**进度条**。
- 在 `global.scss` 中**美化滚动条**，使 Mac os 与 Windows 效果保持一致。
- 静态资源加载页面（减少白屏等待时间）。

## 移动端 vh

在发现在移动端的 Chrome、safari 浏览器中，因为浏览器栏和一些导航栏、链接栏导致不一样的呈现。

我们选择使用 vh-check 解决这个问题：

在 `main.js` 引入 `@/styles/vh-check.js`;

在需要设置高度的时候使用 Mixins 提供的 [@include vh](/Css/Mixins)。

```scss:no-line-numbers
@include vh;
```

或者你也可以在 SCSS 中直接使用：

```scss
$height: 100vh;
height: $height;
height: calc(#{$height} - var(--browser-address-bar, 0px));
```
