# 图片懒加载

通过指令将试图滚动到某个元素加载当前图片

在使用此指令前请查看[vue-lazyload文档](https://github.com/hilongjw/vue-lazyload)。

## 全局注册

```js
// @/directive/index.js
import Vue from 'vue'
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);
```

## 使用

### 方式一：v-lazy
```vue
<ul>
  <li v-for="img in list">
    <img v-lazy="img.src" >
  </li>
</ul>
```

### 方式二：v-lazy-container

#### 参数：

selector: 选择器

error: 错误时显示的图片

loading: 加载时显示的图片

```vue
<div v-lazy-container="{ selector: 'img', error: 'xxx1.jpg', loading: 'xxx2.jpg' }">
  <img data-src="xxx1.jpg">
  <img data-src="xxx2.jpg">
  <img data-src="xxx3.jpg">  
</div>
```