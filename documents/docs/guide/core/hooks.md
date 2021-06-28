# Hooks

Hooks 是一个基于 Composition API 的实用函数集合，使用 typescript 开发，有着良好的代码提示体验。

> 在开始之前，我们假设您已经熟悉 [Vue 3 Composition API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html) 的基本思想。如果你掌握 React 及 React Hooks 基础用法。那么这对你来说是十分友好的。

## 内置 Hooks

### State

| Hook      | 说明                               | API                                    |
| --------- | ---------------------------------- | -------------------------------------- |
| useDevice | 查询设备信息，可用于PC、移动等适配 | [详情](/docs/hooks/state/useDevice.md) |
| useBoolean | 管理 boolean 值 | [详情](/docs/hooks/state/useBoolean.md) |
| useToggle | 用于在两个状态值间切换 | [详情](/docs/hooks/state/useToggle.md) |
| useLocalStorage | 储存于 LocalStorage 的值 | [详情](/docs/hooks/state/useLocalStorage.md) |
| useSessionStorage | 储存于 SessionStorage 的值 | [详情](/docs/hooks/state/useSessionStorage.md) |

### UI

| Hook      | 说明                               | API                                    |
| --------- | ---------------------------------- | -------------------------------------- |
| useLoading | 方便控制页面中整体或局部的 loading 效果 | [详情](/docs/hooks/ui/useLoading.md) |
| useClipboard | 快捷文本复制功能 | [详情](/docs/hooks/ui/useClipboard.md) |
| useFullscreen | 浏览器全屏的开关控制 | [详情](/docs/hooks/ui/useFullscreen.md) |

### SideEffect

| Hook      | 说明                               | API                                    |
| --------- | ---------------------------------- | -------------------------------------- |
| useDebounce | 用来处理 **值** 的防抖 | [详情](/docs/hooks/sideEffect/useDebounce.md) |
| useDebounceFn | 用来处理 **函数** 的防抖 | [详情](/docs/hooks/sideEffect/useDebounceFn.md) |
| useThrottle | 用来处理 **值** 的节流 | [详情](/docs/hooks/sideEffect/useThrottle.md) |
| useThrottleFn | 用来处理 **函数** 的节流 | [详情](/docs/hooks/sideEffect/useThrottleFn.md) |

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
