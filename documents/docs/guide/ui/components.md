# 组件

## 内置全局组件

内置两个非常实用的全局组件：

| 组件              | 说明                         | API                                         |
| ----------------- | ---------------------------- | ------------------------------------------- |
| `<static-file />` | 根据**环境变量**动态引入静态资源 | [详情](/reference/components/staticFile.md) |
| `<svg-icon />`    | 自动加载的 SVG 图标          | [详情](/reference/components/svgIcon.md)    |

## 组件库

为了提高开发效率，建议初始化项目时选择一个组件库，脚手架已经对其做好优化，下面以 Element Plus 为例：

### 全局加载

所有的组件均在 @/components/index.ts 中按需加载：

```typescript
import Vue from 'vue';

import {
  ElButton,
  ElNotification,
  ...
} from 'element-plus';

export const components = [
  ElButton,
  ...
];

export const plugins = [
  ElNotification,
  ...
];
```

分别以 components、plugins 两种形式导出，例如 ElButton 为 components，同时 `Element-plus` 也提供了 例如 ElNotification 这种插件的形式导出。

### 国际化

默认情况已经将设置为中文：

```typescript
import locale from 'element-plus/lib/locale';
import lang from 'element-plus/lib/locale/lang/zh-cn';

locale.use(lang);
```

### 优化

使用 babel 已对组件库做按需加载处理。
