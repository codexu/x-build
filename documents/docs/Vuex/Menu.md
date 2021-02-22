# 菜单信息管理

@/store/modules/system/menu.js

## state.menu

用于储存登陆展示在导航上面的菜单信息。

- 类型：Array

## state.routes

用于储存路由信息，如果需要权限认证则需要与服务器数据进行匹配，通过 addRoutes 动态添加到路由中。

- 类型：Array

## state.searchKeyword

菜单模糊查询的关键词。

- 类型：String

## state.keys

菜单模糊查询的菜单信息中匹配的 key。

- 类型：String[]

## mutations.SET_MENU

设置菜单信息。

- 参数：menu，类型：Array

## mutations.SET_SEARCH_KEYWORD

设置菜单模糊查询关键字。

- 参数：keywords，类型：String

## getters.routesPool

将 state.routes 中的路由扁平化成为 一维数组，并添加两条新属性：

- fullTitle 将层级关系对应的 meta.title 以 / 分割展示
- fullPath 将层级关系对应的 path 形成完整的 URL

## getters.search

state.searchKeyword 变更会触发此项更新，返回匹配的菜单数组。