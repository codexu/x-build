# 数字动画

基于 [countup.js@2.0.7](https://github.com/inorganik/CountUp.js) 封装的数字动画 vue 组件，支持动画，包括开始、暂停、继续、更新、重置方法。

<template>
  <component 
    ref="count"
    :autoplay="false"
    :number="number"
    v-if="dynamicComponent"
    :is="dynamicComponent">
  </component>
  <br />
  <button @click="$refs.count.start(100)">开始</button>
  <button @click="$refs.count.reset(0)">重置</button>
  <button @click="$refs.count.update(200)">更新</button>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
      number: 100
    }
  },
  mounted () {
    import('m-count').then(module => {
      this.dynamicComponent = module.default.component
    })
  },
  methods: {
    start() {
      this.$refs.count.start(100);
    }
  }
}
</script>

## 安装

```
npm install m-count --save
```

## 引入

### 全局引入（不推荐）

@/components/index.js

```js
import MCount from 'm-count';
Vue.use(MCount);
```

### 局部引入（推荐）

默认引入方式：

```vue {5}
<script>
import { MCount } from 'm-count';

export default {
  components: { MCount },
};
</script>
```

使用**自定义组件名**：

```vue {6}
<script>
import MCount from 'm-count';

export default {
  components: {
    'my-count': MCount.component,
  },
};
</script>
```

## 使用方法

```
<m-count :number="100" />
```

## 参数

- **number** `Number(必选)` 应显示的数值。
- **autoplay** `Boolean(可选，默认：true)` 是否自动播放（从0开始）。
- **separator** `String(可选)` 每隔三位分割，一般为英文逗号。

## 方法

### start()

开始播放动画。

### update(number)

将数字更新为指定值（附带动画，从上一次数值开始）。

- **number** `Number` 指定值

### reset(startValue）

重置数值（如果是重置为默认值会附带动画）。

- **startValue** `Boolean` 将数值重置为传入的 props.number，如果设置为 false，则重置为 0。

## 样式

组件根元素默认拥有 `class="m-count"` 属性。