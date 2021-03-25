# 数据持久化

默认已经将 [store.js](https://github.com/marcuswestin/store.js) 安装到脚手架中，直接使用即可。数据持久化依赖浏览器的 **LocalStorage**，使用 store.js API 实现了便捷的的操作和取值方法。

## 使用方式

store.js 是一个实现了浏览器的本地存储的 JavaScript 封装 API，不是通过 Cookie 和 Flash 技术实现，而是使用 localStorage，下面列举一下常用的接口：

### set

单个存储或删除字符串数据

```js
store.set(key, data[, overwrite]);
```

### setAll

批量存储多个字符串数据

```js
store.setAll(data[, overwrite])
```

### get

获取key的字符串数据

```js
store.get(key[, alt])
```

### getAll

```js
store.getAll()
```

### clear

清空所有key/data

```js
store.clear()
```

### keys

返回所有key的数组
```js
store.clear()
```

### has

判断是否存在返回true/false

```js
store.has(key)
```

### remove

删除key包括key的字符串数据

```js
store.remove(key)
```

### forEach

循环遍历，返回false结束遍历;

```js
store.forEach((key, value) =>{
  if (key === 'key') return false;
})