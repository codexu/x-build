# 滚动指定位置

通过指令将视图滚动到某个元素的位置。

在使用此指令前请查看[vue-scrollTo文档](https://github.com/rigor789/vue-scrollTo)。

<template>
  <button v-scroll-to="'footer'">滚动到底部</button>
</template>

<script>
import VueScrollto from 'vue-scrollto';

export default {
  directives: {
    'scroll-to': VueScrollto,
  },
};
</script>

## 局部注册

```vue
<template>
  <div>
    <div id="header"></div>
    <button v-scroll-to="'#footer'">scrollToFoot</button>
    ...
    <button v-scroll-to="'#header'">scrollToHead</button>
    <div id="footer"></div>
  </div>
</template>

<script>
import VueScrollto from 'vue-scrollto';

export default {
  directives: {
    'scroll-to': VueScrollto,
  },
};
</script>
```

## 全局注册

```js
// @/directive/index.js
import Vue from 'vue'
import VueScrollto from 'vue-scrollto';

Vue.directive('permission', permission);
```