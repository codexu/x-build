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

## 覆盖组件库样式

antd 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整

默认已经安装了 less、less-loader，在 `@/styles/antd-theme.less` 可以覆盖默认样式。

以下是一些最常用的通用变量，所有样式变量可以在 [这里](https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less) 找到。

```less
@primary-color: #1890ff; // 全局主色
@link-color: #1890ff; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.85); // 标题色
@text-color: rgba(0, 0, 0, 0.65); // 主文本色
@text-color-secondary: rgba(0, 0, 0, 0.45); // 次文本色
@disabled-color: rgba(0, 0, 0, 0.25); // 失效色
@border-radius-base: 4px; // 组件/浮层圆角
@border-color-base: #d9d9d9; // 边框色
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
```

## 移动端 100vh 问题

`v1.1.7 新增`

在发现在移动端的 Chrome、safari 浏览器中，因为浏览器栏和一些导航栏、链接栏导致不一样的呈现。

### 解决方案：

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

## 自适应

根据视窗大小进行变化，达到自适应效果。

### 安装
```js
npm install postcss-px-to-viewport --save-dev
```


### 用法
**vue.config.js**
```js
const pxtoviewport = require('postcss-px-to-viewport');
module.exports = {
   css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtoviewport({
            // 配置视窗口尺寸
            unitToConvert: 'px', 
            viewportWidth: 1920,
            unitPrecision: 5,
            viewportUnit: 'vw',
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],
            minPixelValue: 1,
            mediaQuery: false,
            landscapeUnit: 'vw',  // 横屏时使用的单位
            landscapeWidth: 568 // 横屏时使用的视口宽度
          })
        ]
      }
    }
  }
}
```
- unitToConvert `String 要转换的单位，默认px`
- viewportWidth `Numbwe 视口的宽度 (设计稿大小)`
- unitPrecision `Number 转换后的精度，即小数点位数`
- viewportUnit `String 希望使用的视口单位`
- fontViewportUnit `String 体需要转换成的视窗单位，默认vw`
- selectorBlackList  `Array 要忽略的选择器，保留为px`
  - 值是String：检查选择器是否包含字符串 `例如：['body'] 将匹配 .body-class`
  - 值是regexp，将检查选择器是否匹配regexp `例如：[/^body$/]将匹配body但不匹配.body`
- minPixelValue `Number 设置要替换的最小像素值`
- mediaQuery  `Boolean 是否允许在媒体查询中转换px`
- replace `Boolean 换包含vw的规则，而不添加后备广告`
- exclude `Array or Regexp 忽略某些文件`
  - 值为regexp：将忽略匹配文件，例如“node_modules”。
  - 值是array：则数组的元素为regexp。
- landscape `Boolean 是否处理横屏情况`
- landscapeUnit `String landscape选项的预期单位`
- landscapeWidth  `Number 用于横向方向的视口宽度`

