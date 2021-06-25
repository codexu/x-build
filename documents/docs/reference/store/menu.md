# 菜单管理

`@/store/sys/menu.ts`

用于管理菜单的 sotre。

## State

| 属性          | 说明         | 类型             | 默认值                   |
| ------------- | ------------ | ---------------- | ------------------------ |
| menu          | 菜单信息     | RouteRecordRaw[] | frameIn（来源于 routes） |
| searchKeyword | 搜索的关键词 | string           | ''                       |

## Actions

| 方法             | 说明               | 参数             |
| ---------------- | ------------------ | ---------------- |
| setMenu          | 设置菜单           | RouteRecordRaw[] |
| setSearchKeyword | 设置模糊搜索关键词 | string           |

## Getters

### routesPool

相比于 `<RouteRecordRaw>` 类型增加了两个新的属性：

```typescript
interface PoolRouteRecordRow extends _RouteRecordBase {
  fullTitle: string;
  fullPath: string;
}
```

| 属性      | 说明                         | 类型   |
| --------- | ---------------------------- | ------ |
| fullTitle | 根据路由父子关系合并后的标题 | string |
| fullPath  | 根据路由父子关系合并后的路径 | string |

### searchRoutes

基于 routesPool 进行的模糊查询，搜索的结果也是一维数组，类型与 routesPool 一致。
