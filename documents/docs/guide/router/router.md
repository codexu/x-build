# 路由配置

在 `@/router/routes.ts` 中配置路由，如果页面较多，建议再做拆分。

## 分类

路由分为3类：`frameIn`, `frameOut`, `errorPage`

frameIn：基于 `BasicLayout`，通常需要登录或权限认证的路由。

frameOut：不继承任何 layout 的页面，如登录页或开发其他独立页面。

errorPage：暂只提供 404 页面。

## Meta 配置

vue-router 配置时，需要匹配 `<RouteRecordRaw>` 类型，我们唯一可以自定义的类型就是 `meta`，在路由配置中，集成了**权限验证**、**页面标题**、**页面缓存**：

| 属性        | 说明                           | 类型                       | 默认值 |
| ----------- | ------------------------------ | -------------------------- | ------ |
| title       | 页面独立的标题                 | string                     | -      |
| auth        | 此路由是否需要进行登陆权限验证 | boolean                    | false  |
| permissions | 页面内部的权限，例如按钮权限   | { [key: string]: boolean } | -      |
| keepAlive | 设置页面是否需要使用缓存   | { boolean } | false      |

::: tip 提示
permissions 每一个 key 对应权限功能的验证，当 key 的值为 true 时，代表具有权限，若 key 为 false，若配合 `v-permission` 指令，可以隐藏相应的 DOM。
:::
