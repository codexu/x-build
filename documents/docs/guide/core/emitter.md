# 组件通讯

## 3.x 重要更新

如果你曾经是 Vue2.x 的开发者，那么请阅读下面引用[官方文档](https://v3.cn.vuejs.org/guide/migration/events-api.html#_3-x-%E6%9B%B4%E6%96%B0)的一段话：

> 我们从实例中完全移除了 `$on`、`$off` 和 `$once` 方法。`$emit` 仍然包含于现有的 API 中，因为它用于触发由父组件声明式添加的事件处理函数。
>
> 在 Vue 3 中，已经不可能使用这些 API 从组件内部监听组件自己发出的事件了，该用例暂没有迁移的方法。但是该 eventHub 模式可以被替换为实现了事件触发器接口的外部库，例如 `mitt` 或 `tiny-emitter`。

## 为什么选择 mitt ？

- 足够小，仅有 200bytes。
- 支持全部事件的监听和批量移除。
- 无依赖，不论是什么框架都可以直接使用。

::: warning 严重警告
我们已经无法在项目中使用 **eventBus**，我们仅推荐你在**特殊场合**下使用 mitt，**它并不是开发的常态**，你一定要确保知道自己在做什么？否则你的项目将难以维护！！！
:::

## 如何使用 mitt ？

在使用 mitt 前请阅读[官方文档](https://github.com/developit/mitt)：

### 引入

脚手架默认提供一个可以直接使用的对象：

```typescript
import emitter from '@/libs/emitter';
```

当然你也可以引入已经安装好的 mitt：

```typescript
import mitt from 'mitt'

const emitter = mitt()
```

### API

mitt 提供了非常简单的 API，下面代码是官方演示：

```typescript
// listen to an event
emitter.on('foo', e => console.log('foo', e) )

// listen to all events
emitter.on('*', (type, e) => console.log(type, e) )

// fire an event
emitter.emit('foo', { a: 'b' })

// clearing all events
emitter.all.clear()

// working with handler references:
function onFoo() {}
emitter.on('foo', onFoo)   // listen
emitter.off('foo', onFoo)  // unlisten
```
