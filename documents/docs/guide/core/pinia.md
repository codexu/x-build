# 状态管理

由于 `vuex 4` 对 typescript 的支持让人感到难过，所以状态管理弃用了 vuex 而采取了 pinia。

## 为什么采用 Pinia

- `Pinia` 的 API 设计非常接近 `Vuex 5` 的[提案](https://github.com/vuejs/rfcs/discussions/270)，也就是说如果 `Vuex 5` 更加好用，我们可以很方便的做代码迁移。（Pania 的作者，是 Vue.js 核心团队的一员）
- 无需像 `Vuex 4` 自定义复杂的类型来支持 typescript，天生具备完美的类型推断。
- 模块化设计，你引入的每一个 store 在打包时都可以自动拆分他们。
- 无嵌套结构，但你可以在任意的 store 之间交叉组合使用。
- `Pinia` 与 **Vue devtools** 挂钩，不会影响 Vue 3 开发体验。
