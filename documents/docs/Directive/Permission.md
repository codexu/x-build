# 组件权限验证

## 路由添加 permissions 属性

页面内的组件权限默认设定为后端返回的路由，通过动态添加路由并附加 permissions 权限对象：

```js{7-11}
{
  path: 'home',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    title: '首页',
    permissions: {
      key1: true,
      key2: false,
      // ...
    },
  },
},
```

permissions 中 key 值为 false 时，可以理解为没有权限。

## 在组件中调用指令

```vue {2-3,9-11}
<template>
  <button v-permission="permissions.key1">key1</button>
  <input v-permission="permissions.key2" />
</template>

<script>
export default {
  computed: {
    permissions() {
      return this.$route.meta.permissions
    }
  }
}
</script>
```

:::tip 提示
无权限的组件会从 DOM 树中被删除，但无法保证。
:::