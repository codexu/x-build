# 路由&页面

## 配置

在 @/router/routes 中配置路由

## 分类

路由分为3类：`frameIn`, `frameOut`, `errorPage`

frameIn：基于 `BasicLayout`，通常需要登录或权限认证的路由。

frameOut：不需要动态判断权限的路由，如登录页或通用页面。

errorPage：例如404。

## meta

在路由中，集成了权限验证的功能，需要为页面增加权限时，请在 meta 下添加相应的 key：

### auth

- 类型：Boolean
- 说明：当 auth 为 true 时，此页面需要进行登陆权限验证，只针对 frameIn 路由有效。

### permissions

- 类型：Object
- 说明：permissions 每一个 key 对应权限功能的验证，当 key 的值为 true 时，代表具有权限，若 key 为 false，配合 `v-permission` 指令，可以隐藏相应的 DOM。

## 页面开发

- 根据业务需要划分，按照路由层级在 views 中创建相对应的页面组件，以文件夹的形式创建，并在文件夹内创建 index.vue 文件作为页面的入口文件。
- 页面内的组件：在页面文件夹下创建 components 文件夹，在其内部对应创建相应的组件文件，如果是复杂组件，应以文件夹的形式创建组件。
- 工具模块：能够高度抽象的工具模块，应创建在 @/src/libs 内创建 js 文件。