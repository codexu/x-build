# Ant Design Vue

基础组件库选择 [Ant Design Vue](https://www.antdv.com/docs/vue/introduce-cn/)，如果不了解请详细阅读文档。

## 全局加载

所有的组件均在 @/components/index.js 中按需加载：

```js{9}
import Vue from 'vue';

import {
  Button,
  ...
} from 'ant-design-vue';

Vue.use(Button);
...
```

使用 Vue.use() 全局注册组件。

## 页面内加载

Ant Design Vue 中部分体积较大的组件，例如 `DatePicker`、`Table` 等，根据业务需求，应考虑在页面中进行加载，尽量保证首屏加载的速度。

## 样式

### 加载方式

默认情况下，Ant Design Vue 组件的样式通过 babel-plugin-import 做了按需加载，这样做可以有效的将 css 文件打包体由 **500kb** 降低到最低（根据你引入组件的数量）。

@/components/index.js 引入：

```js
import '@/styles/antd-theme.less';
```

### 修改默认参数

- 通过 @/styles/antdTheme.js 可以修改变量。
- 通过 @/styles/antd-theme.less 不但可以覆盖变量，还可以覆盖组件库的 class 样式，需要在 @/components/index.js 中引入，但此项操作会导致 css 无法按需打包。

## 图标

x-build 默认通过 webpack 将 Ant Design Vue 所提供的图标进行了按需加载优化，现在仅提供几个少量的图标，可以通过阅读 [构建优化章节](/Guide/Basics/BuildOptimization) 学习如何按需加载 Ant Design Vue 提供的图标。