# 代码高亮

基于 [highlight.js@10.3.1](https://github.com/highlightjs/highlight.js/) 封装的代码高亮 vue 组件。

<template>
  <component :code="code" v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>

<script>
const code = `let a  = 0;
a += 1;
console.log(a);
`
export default {
  data() {
    return {
      dynamicComponent: null,
      code
    }
  },
  mounted () {
    import('m-highlight').then(module => {
      this.dynamicComponent = module.default.component
    })
  }
}
</script>

## 安装

```
npm install m-highlight --save
```

## 引入

### 全局引入（不推荐）

@/components/index.js

```js
import MHighlight from 'm-highlight';
Vue.use(MHighlight);
```

### 局部引入（推荐）

默认引入方式：

```vue {5}
<script>
import { MHighlight } from 'm-highlight';

export default {
  components: { MHighlight },
};
</script>
```

使用**自定义组件名**：

```vue {6}
<script>
import MHighlight from 'm-highlight';

export default {
  components: {
    'my-highlight': MHighlight.component,
  },
};
</script>
```

## 使用方法

```html
<m-highlight code="" />
```

## 参数

- **code** `String(必选)` 需要高亮显示代码。
- **language** `String(可选，默认：'javascript')` 语言，暂支持 javascript、java、html、css。

## 样式

使用皮肤：(highlight.js 支持多种皮肤样式，引入相应的css文件即可)

```js
import 'highlight.js/styles/***.css';
```