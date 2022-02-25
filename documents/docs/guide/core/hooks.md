# Hooks

Hooks 是一个基于 Composition API 的实用函数集合，使用 typescript 开发，有着良好的代码提示体验。

> 在开始之前，我们假设您已经熟悉 [Vue 3 Composition API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html) 的基本思想。如果你掌握 React 及 React Hooks 基础用法。那么这对你来说是十分友好的。

## 如何使用？

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

### 对象用法

如果您更喜欢将它们用作对象属性样式，则可以使用reactive(). 例如：

```typescript:no-line-numbers
const device = reactive(useDevice())
```

## 建议

使用 [vueuse](https://github.com/vueuse/vueuse)：

- 交互式文档和演示
- 无缝迁移，支持 Vue 2 与 Vue 3
- tree shakable
- 使用 Typescript 编写

## 内置 Hook
### useClipboard

基于 clipboard@2.0.6 的文本复制 vue 指令。

```typescript
import useClipboard from '@/hooks/useClipboard';

const { copyText } = useClipboard();
```

| 参数     | 说明       | 类型       | 默认值 |
| -------- | ---------- | ---------- | ------ |
| copyText | 复制的内容 | (text: string) => void | -      |

### useDevice

获取设备信息，可针对不同终端进行适配。

```typescript
import useDevice from '@/hooks/useDevice';

const { deviceType, deviceOrientation, deviceOs } = useDevice();
```

| 参数              | 说明               | 类型                  | 默认值 |
| ----------------- | ------------------ | --------------------- | ------ |
| deviceType        | 当前设备类型       | `<DeviceType>`        | -      |
| deviceOrientation | 当前设备定位(方向) | `<DeviceOrientation>` | -      |
| deviceOs          | 操作系统           | `<DeviceOs>`          | -      |

### useFullscreen

用于实现浏览器全屏。

```typescript
import useFullscreen from '@/hooks/useFullscreen';

const { 
  screenfullActive,
  toggleScreenfull,
  openScreenfull,
  closeScreenfull
  } = useFullscreen();
```

| 参数             | 说明           | 类型       | 默认值 |
| ---------------- | -------------- | ---------- | ------ |
| screenfullActive | 是否全屏的状态 | boolean    | false  |
| toggleScreenfull | 切换全屏       | () => void | -      |
| openScreenfull   | 开启全屏       | () => void | -      |
| closeScreenfull  | 关闭全屏       | () => void | -      |
