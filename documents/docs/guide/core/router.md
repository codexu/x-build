# 文件路由

> 从 v6.2.0 版本起，采用基于 page 文件路径的方式自动生成路由。

什么是文件路由？确切的说应该是基于文件系统的路由（file system based routing）。通常情况下我们只需要写 vue 页面就可以自动生成路由，而访问者只要访问具体的路由，即可访问对应文件包含的内容了，这样做我们就不用像传统 Vue 项目开发那样在 vue-router 中配置专门的路由映射。

[vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) 插件为我们提供了这样的功能。

## 基本路由

自动将你的 pages 目录中的文件映射到具有相同名称的路由：

- `src/pages/users.vue` -> `/users`
- `src/pages/users/profile.vue` -> `/users/profile`
- `src/pages/settings.vue` -> `/settings`

## 索引路由

文件名称为 index 被视为路由的索引页：

- `src/pages/index.vue` -> `/`
- `src/pages/users/index.vue` -> `/users`

## 动态路由

动态路由使用方括号表示，目录和页面都可以是动态的：

- `src/pages/users/[id].vue` -> `/users/:id( /users/one)`
- `src/pages/[user]/settings.vue` -> `/:user/settings( /one/settings)`

任何动态参数都将传递给页面。例如，给定文件src/pages/users/[id].vue，路由/users/abc将传递以下参数：

```js
{ id：'abc'  }
```

## 嵌套路由

我们可以利用 Vue Routers 子路由来创建嵌套布局，父组件可以通过赋予它与包含您的子路由的目录相同的名称来定义。

比如这个目录结构：

```
src/pages/
  ├── users/
  │  ├── [id].vue
  │  └── index.vue
  └── users.vue
```

将转化为此路由配置：

```js
[
  {
    path: '/users',
    component: '/src/pages/users.vue',
    children: [
      {
        path: '',
        component: '/src/pages/users/index.vue',
        name: 'users'
      },
      {
        path: ':id',
        component: '/src/pages/users/[id].vue',
        name: 'users-id'
      }
    ]
  }
]
```

## 自定义参数

`<route>` 通过将块添加到 SFC 将路由元添加到路由。这将在生成后直接添加到路由中，并将覆盖它。

JSON/JSON5：

```vue
<route>
{
  name: "name-override",
  meta: {
    requiresAuth: false
  }
}
</route>
```

YAML:

```vue
<route lang="yaml">
name: name-override
meta:
  requiresAuth: true
</route>
```

## 内置 Meta 配置

vue-router 配置时，需要匹配 `<RouteRecordRaw>` 类型，我们唯一可以自定义的类型就是 `meta`，在路由配置中，集成了**权限验证**、**页面标题**、**页面缓存**：

| 属性        | 说明                           | 类型                       | 默认值 |
| ----------- | ------------------------------ | -------------------------- | ------ |
| title       | 页面独立的标题                 | string                     | -      |
| auth        | 此路由是否需要进行登陆权限验证 | boolean                    | false  |
| permissions | 页面内部的权限，例如按钮权限   | { [key: string]: boolean } | -      |
| keepAlive | 设置页面是否需要使用缓存   | { boolean } | false      |
| layout | 设置自定义布局组件   | { string } | default      |

::: tip 提示
permissions 每一个 key 对应权限功能的验证，当 key 的值为 true 时，代表具有权限，若 key 为 false，若配合 `v-permission` 指令，可以隐藏相应的 DOM。
:::

### 页面缓存

keepalive是Vue的内置组件，作用是将组件缓存在内存当中，防止重复渲染DOM，属于消耗内存获取速度。常用的用法是将组件或者路由缓存。

::: warning 警告
此配置只在 frameIn 中的路由有效。
:::

对应页面的 vue 文件配置 meta.keepAlive 属性：

```vue
<router lang="yaml">
meta:
  keepAlive: true
</router>
```

### 权限管理

通过获取当前用户的权限去比对路由表，生成当前用户具的权限可访问的路由表，通过 router.addRoutes 动态挂载到 router 上。

- 判断页面是否需要登陆状态，需要则跳转到 `/user/login`。
- 本地存储中不存在 `token` 则跳转到 `/user/login`。
- 如果存在 `token`，用户信息不存在，自动调用 vuex `/system/user/getInfo`。

需要登陆后才可以访问的页面配置：

在 路由配置 中，`meta` 属性中定义 `auth` 属性为 `true`。

```vue
<router lang="yaml">
meta:
  auth: true
</router>
```

> 路由层面权限的控制代码都在 @/router/permission.ts 中，如果想修改逻辑，直接在适当的判断逻辑中 next() 释放钩子即可。
