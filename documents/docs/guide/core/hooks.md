# Hooks

Hooks 是一个基于 Composition API 的实用函数集合，使用 typescript 开发，有着良好的代码提示体验。

> 在开始之前，我们假设您已经熟悉 [Vue 3 Composition API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html) 的基本思想。如果你掌握 React 及 React Hooks 基础用法。那么这对你来说是十分友好的。

## 使用

Hooks 中的大多数函数都返回一个 refs 对象或函数，你可以使用 ES6 的解构语法来获取你需要的内容。

你只需要在 `@/hooks` 中引入它即可：

```typescript
import useDevice from '@/hooks/useDevice';

export default {
  setup() {
    const { deviceType, deviceOrientation, deviceOs } = useDevice();
    return { deviceType, deviceOrientation, deviceOs }
  }
}
```

## 对象用法

如果您更喜欢将它们用作对象属性样式，则可以使用reactive(). 例如：

```typescript:no-line-numbers
const device = reactive(useDevice())
```
