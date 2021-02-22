# 全屏

## state.active

全屏状态。

- 类型：Boolean


## 初始化监听

```js
this.$store.dispatch('system/fullscreen/listen')
```

## 使用

```js
// 切换全屏状态
this.$store.dispatch('system/fullscreen/toggle')
```

```js
// 打开全屏
this.$store.commit('system/fullscreen/SET_ACTIVE', true)
// 关闭全屏
this.$store.commit('system/fullscreen/SET_ACTIVE', false)
```