# 菜单管理

如果你打算开发一个后台应用，不论是实现导航栏还是侧边栏，菜单都是后台应用的关键组成部分。脚手架已经为你提供了两个非常实用的功能：**路由扁平化**与**路由模糊查询**功能，并且已经将 frameIn 中的路由储存在 menu 属性中，可以拿来即用，大大减轻了手动开发的工作量。

## 使用

``` typescript
import { useMenuStore } from '@/store/sys/menu';

const menuStore = useMenuStore();
```

## 菜单

默认情况下，`menu` 取自 `routes.frameIn`：

``` typescript
const menu = computed(() => menuStore.menu);
```

::: warning 警告
你必须使用 computed 获取 menu，如果你使用解构的方式，menu 将不是一个响应式对象。
:::

`menu` 不是一成不变的，你可以通过 `setMenu` 方法用你的逻辑去改变它，切记你需要满足 `<RouteRecordRaw[]>` 类型检测：

``` typescript
menuStore.setMenu(menus: <RouteRecordRaw[]>);
```

## 扁平化

将菜单扁平化为一维数组，为模糊搜索做数据支撑，如果你想直接使用的话：

``` typescript
const routesPool = computed(() => menuStore.routesPool);
```

## 模糊查询

通过调用 setSearchKeyword 方法设置搜索关键词：

``` typescript
menuStore.setSearchKeyword(keyword: string);
```

searchRoutes getter 将返回关键词相关的路由结果：

``` typescript
const searchRoutes = computed(() => menuStore.searchRoutes);
```

::: tip 提示
模糊搜索是基于`路由扁平化`的数据结果，相关搜索条件包含：['fullTitle', 'fullPath', 'path', 'name']。
:::

## API

相关参数请查看[菜单管理 API](/reference/store/menu.md)
