# 权限验证

## 实现方式

通过获取当前用户的权限去比对路由表，生成当前用户具的权限可访问的路由表，通过 router.addRoutes 动态挂载到 router 上。

- 判断页面是否需要登陆状态，需要则跳转到 /user/login
- 本地存储中不存在 token 则跳转到 /user/login
- 如果存在 token，用户信息不存在，自动调用 vuex '/system/user/getInfo'

## 登陆验证

需要登陆后才可以访问的页面配置

在 路由配置 中，`meta` 属性中定义 `auth` 属性为 `true`。

```js {6}
{
  path: 'home',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    auth: true,
  },
}
```

## 自定义权限配置

现在路由层面权限的控制代码都在 @/router/permission.js 中，如果想修改逻辑，直接在适当的判断逻辑中 next() 释放钩子即可。