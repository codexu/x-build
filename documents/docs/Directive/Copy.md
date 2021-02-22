# 文本复制

基于 clipboard@2.0.6 的文本复制 vue 指令。

<template>
  <button
    v-copy='copyData'
    v-copy:success='copySuccess'
  >
    复制上面的一段话
  </button>
</template>

<script>
import MCopy from 'm-copy';

export default {
  data() {
    return {
      copyData: '基于 clipboard@2.0.6 的文本复制 vue 指令。'
    }
  },
  methods: {
    copySuccess(e) {
      alert('你成功复制了一段话！')
    }
  },
  directives: {
    copy: MCopy.directive,
  },
}
</script>

## 安装

```
npm install m-copy --save
```

## 引入

### 全局引入

@/directive/index.js

```js
import MCopy 'm-copy';
Vue.use(MCopy);
```

### 局部引入

默认引入方式：

```vue {5}
<script>
import { MCopy } from 'm-copy';

export default {
  directives: { MCopy },
};
</script>
```

使用**自定义指令名**：

```vue {6}
<script>
import MCopy from 'm-copy';

export default {
  directives: {
    mycopy: MCopy.directive,
  },
};
</script>
```

## 使用

```vue {3-4}
<template>
  <button
    v-copy='copyData'
    v-copy:success='copySuccess'
  >
    copy
  </button>
</template>

<script>
export default {
  data() {
    return {
      copyData: 'copy data...'
    }
  },
  methods: {
    copySuccess(e) {
      // ...
    }
  }
};
</script>
```

## 指令

- **v-copy** `String(必选)` 绑定要复制的文本
- **v-copy:success** `Function(可选)` 绑定成功复制后的回调函数
