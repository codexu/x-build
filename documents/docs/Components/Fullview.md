# 图片全屏预览

基于 [swiper@4.4.0](https://www.swiper.com.cn/) 封装的图片全屏预览 vue 组件。

## 安装

```
npm install m-fullview --save
```

## 引入

### 全局引入（不推荐）

@/components/index.js

```js
import MFullview from 'm-fullview';
Vue.use(MFullview);
```

### 局部引入（推荐）

默认引入方式：

```vue {5}
<script>
import { MFullview } from 'm-fullview';

export default {
  components: { MFullview },
};
</script>
```

使用**自定义组件名**：

```vue {6}
<script>
import MFullview from 'm-fullview';

export default {
  components: {
    'my-fullview': MFullview.component,
  },
};
</script>
```

## 使用方法

```vue
<m-fullview ref="fullview" :images="" />
```

## 参数

- **images** `string[](必选)` 传入图片的 url 数组。
- **current** `Number(可选，默认 0)` 组件建立后跳转到第 n 张图。

## 方法

### show()

显示图片预览组件

```js
this.$refs.fullview.show();
```

## 事件

### hide(index)

关闭预览时触发

- **index** `Number` 关闭时图片的索引值。

```vue
<mw-fullview @hide="hide" />
```

```js {2}
methods: {
  hide(index) {},
}
```







