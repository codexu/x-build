# 组件

## 内置全局组件

内置两个非常实用的全局组件：

| 组件              | 说明                         | API                                         |
| ----------------- | ---------------------------- | ------------------------------------------- |
| `<static-file />` | 根据**环境变量**动态引入静态资源 | [详情](/reference/components/staticFile.md) |
| `<svg-icon />`    | 自动加载的 SVG 图标          | [详情](/reference/components/svgIcon.md)    |

## 组件库

为了提高开发效率，建议初始化项目时选择一个组件库，脚手架已经对其做好优化。

### Tree Shaking

通过 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件，实现了只注册你使用的组件。
