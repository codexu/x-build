# Vuex 使用规范

状态管理有5个核心，分别是 **State**、**Getters**、**Mutations**、**Actions** 以及 **Modules**，下面分别说明一下功能和使用规则。

## State

[State](https://vuex.vuejs.org/zh/guide/state.html) 为单一状态树，在 state 中需要定义我们所需要管理的数组、对象、字符串等等，只有在这里定义了，在 vue 的组件中才能获取你定义的这个对象的状态。

- 修改 `state` 中数据必须通过 `mutations`。
- 每一个可能发生改变的 `state` 必须同步创建一条或多条用来改变它的 `mutations`。 
- 服务端获取的数据存放在 `state` 中，作为原始数据保留，不可变动。

## Getters

[Getters](https://vuex.vuejs.org/zh/guide/getters.html) 有点类似 vue.js 的计算属性，当我们需要从 store 的 state 中派生出一些状态，那么我们就需要使用 getters，getters 会接收 state 作为第一个参数，而且 getters 的返回值会根据它的依赖被缓存起来，只有 getters 中的依赖值（state 中的某个需要派生状态的值）发生改变的时候才会被重新计算。

- 通过 `getters` 处理你需要得到的数据格式，而不是通过修改 `state` 原始数据。
- 组件内不强制使用 `mapGetters`，因为你可能需要使用 `getter` 和 `setter`。

## Mutations

- 改变 `state` 的唯一方法就是提交 [mutations](https://vuex.vuejs.org/zh/guide/mutations.html)。
- 组件内使用 `mapMutations` 辅助函数将组件中的 `methods` 映射为 `store.commit` 调用。
- 命名采用 `大写字母` + `下划线` 的规则。
- 定义 `CLEAR`，以确保路由切换时可以初始化数据。

## Actions

- 页面重的数据接口尽量在 [actions](https://vuex.vuejs.org/zh/guide/actions.html) 中调用。
- 服务端返回的数据尽量不作处理，保留原始数据。
- 获取到的数据必须通过调用 `mutations` 改变 `state`。

## Modules

- 通常情况下按照页面划分 [modules](https://vuex.vuejs.org/zh/guide/modules.html)。
- 默认内置了 `system` 保证了脚手架的基础功能。
- 每个页面模块或页面的子模块添加属性 `namespaced: true`。