# 图标

## 为什么选择 Svg 方案

- 支持多色图标了，不再受单色限制。
- 支持像字体那样通过font-size,color来调整样式。
- 支持 ie9+。
- 可利用CSS实现动画。
- 减少HTTP请求。
- 矢量，缩放不失真。
- 可以很精细的控制SVG图标的每一部分。

## 其他方案

### 多倍图片

为了提升用户体验，一般会分开做几套图片，根据用用户的devicePixelRatio判断让他们加载对应的图片。

### Font Awesome

提供了大量的图标，但是搜索起来麻烦，不支持自定义图标。

### iconfont

字体图标存在失真、锯齿的问题。

## 自动注册 Svg 图标

在 `src/assets/icons` 文件夹下的 svg 图表会被自动注册，这是因为已经对 webpack 和 svg-sprite-loader 进行了相关设置，文件全部打包成 svg-sprite。

webpack 配置：`vue.config.js`

```js {12-13}
chainWebpack: (config) => {
  config.module
    .rule('svg')
    .exclude.add(resolve('src/assets/icons'))
    .end();

  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/assets/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader');
},
```

加载所有的 svg 图标：`@/components/SvgIcon/index.ts`

```js
const requireAll = (requireContext) => requireContext
  .keys()
  .map(requireContext);
const req = require.context('@/assets/icons', false, /\.svg$/);
requireAll(req);
```

### 组件

通过全局注册的组件 `<svg-icon />` 即可显示已经注册的 svg 图表，[查看组件详细说明](/Components/Svg)。

## 组件库图标

当你引入某些组件后，发现缺少了图标，这是因为教授架为了极致的压缩 chunk 包的大小作出的牺牲，改为按需加载，以少量的开发成本的代价，减少了大量的无用图标的引入，具体方式请阅读[构建优化章节](/Guide/Basics/BuildOptimization)。
