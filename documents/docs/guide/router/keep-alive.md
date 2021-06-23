# 页面缓存

::: warning 警告
此配置只在@/layouts/BasicLayout/index.vue组件下的路由有效。
:::

keepalive是Vue的内置组件，作用是将组件缓存在内存当中，防止重复渲染DOM，属于消耗内存获取速度。常用的用法是将组件或者路由缓存。

## router配置缓存

对应路由配置meta属性：

```ts{5-8}
{
  path: 'example',
  name: 'Example',
  component: () => import('@/viewxample/index.vue'),
  meta: {
    title: '示例',
    keepAlive: true,
  },
},
```

| 参数      | 说明                     | 类型    | 默认值 |
| --------- | ------------------------ | ------- | ------ |
| keepAlive | 设置页面是否需要使用缓存 | boolean | false  |
