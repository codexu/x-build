# 状态管理

## 什么是 Pinia ？

由于 `vuex 4` 对 typescript 的支持让人感到难过，所以状态管理弃用了 vuex 而采取了 [pinia](https://pinia.esm.dev/)。

::: tip 为什么采用 Pinia ?

- **Pinia** 的 API 设计非常接近 `Vuex 5` 的[提案](https://github.com/vuejs/rfcs/discussions/270)。（作者是 Vue 核心团队成员）
- 无需像 `Vuex 4` 自定义复杂的类型来支持 typescript，天生具备完美的类型推断。
- 模块化设计，你引入的每一个 store 在打包时都可以自动拆分他们。
- 无嵌套结构，但你可以在任意的 store 之间交叉组合使用。
- **Pinia** 与 **Vue devtools** 挂钩，不会影响 Vue 3 开发体验。
:::

下面简单的介绍一下如何使用 Pinia，并对比 vuex 有哪些区别与注意事项，具体请参考[官方文档](https://pinia.esm.dev/)。

## Store

在深入研究核心概念之前，我们需要知道脚手架内置了哪些 Store 和如何自定义创建 Store。

### 内置 Store

| Store        | 说明               | API                              |
| ------------ | ------------------ | -------------------------------- |
| useUserStore | 用户登录与信息管理 | [详情](/reference/store/user.md) |
| useMenuStore | 路由&菜单管理      | [详情](/reference/store/menu.md) |
| useLogStore  | 日志管理           | [详情](/reference/store/log.md)  |

### 创建 Store

Pinia 已经内置在脚手架中，并且与 vue 已经做好了关联，你可以在任何位置创建一个 store：

```typescript
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () =>({}),
  getters: {},
  actions: {}
})
```

这与 Vuex 有很大不同，它是标准的 Javascript 模块导出，这种方式也让开发人员和你的 IDE 更加清楚 store 来自哪里。

::: warning Pinia 与 Vuex 的区别

- **id** 是必要的，它将所使用 store 连接到 devtools。
- 创建方式：`new Vuex.Store(...)`(vuex3)，`createStore(...)`(vuex4)。
- 对比于 vuex3 ，state 现在是一个**函数返回对象**。
- 没有 **mutations**，不用担心，state 的变化依然记录在 devtools 中。
:::

## State

### 添加属性

创建好 store 之后，可以在 state 中创建一些属性了，

```typescript
state: () => ({ name: 'codexu', age: 18 })
```

将 store 中的 state 属性设置为一个函数，该函数返回一个包含不同状态值的对象，这与我们在组件中定义数据的方式非常相似。

### 在模板中使用 store

现在我们想从 store 中获取到 name 的状态，我们只需要使用以下的方式即可：

```typescript
<h1>{{userStore.name}}</h1>

const userStore = useUserStore()
return { userStore }
```

注意这里并不需要 `userStore.state.name`。
::: danger
虽然上面的写法很舒适，但是你一定不要用解构的方式去提取它内部的值，这样做的话，会失去它的响应式：

```typescript:no-line-numbers
const { name, email } = useUserStore()
```

:::

## Getters

Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能，传统的函数声明使用 this 代替了 state 的传参方法，但箭头函数还是要使用函数的第一个参数来获取 state ，因为箭头函数处理 this 的作用范围：

```typescript
getters: {
  nameLength() {
    return this.name.length
  },
  nameLength: state => state.name.length,
  nameLength: ()=> this.name.length ❌ 
}
```

## Actions

这里与 Vuex 有极大的不同，Pinia 仅提供了一种方法来定义如何更改状态的规则，**放弃 mutations 只依靠 Actions**，这是一项重大的改变。

::: tip Pinia 让 Actions 更加的灵活

- 可以通过**组件**或其他 **action** 调用
- 可以从**其他 store** 的 action 中调用
- 直接在商店实例上调用
- 支持**同步**或**异步**
- 有任意数量的参数
- 可以包含有关如何更改状态的逻辑（也就是 vuex 的 mutations 的作用）
- 可以 `$patch` 方法直接更改状态属性
:::

```typescript
actions: {
  async insertPost(data){
    await doAjaxRequest(data);
    this.name = '...';
  }
}
```

## Devtools

脚手架已内置下面的代码，这将添加 devtools 支持：

```typescript
import { createPinia, PiniaPlugin } from 'pinia'

Vue.use(PiniaPlugin)
const pinia = createPinia()
```

在 Vue 3 中，仍然不支持时间旅行和编辑等一些功能，因为 vue-devtools 还没有公开必要的 API。
