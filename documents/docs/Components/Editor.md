# 富文本编辑器

基于 [wangeditor@4.0.5](http://www.wangeditor.com/) 封装的富文本编辑器 vue 组件。

<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
    import('m-editor').then(module => {
      this.dynamicComponent = module.default.component
    })
  }
}
</script>

## 安装

```
npm install m-editor --save
```

## 引入

### 全局引入（不推荐）

@/components/index.js

```js
import MEditor from 'm-editor';
Vue.use(MEditor);
```

### 局部引入（推荐）

默认引入方式：

```vue {5}
<script>
import { MEditor } from 'm-editor';

export default {
  components: { MEditor },
};
</script>
```

使用**自定义组件名**：

```vue {6}
<script>
import MEditor from 'm-editor';

export default {
  components: {
    'my-editor': MEditor.component,
  },
};
</script>
```

## 使用方法

```html
<m-editorv ref="editorv" defaultData="" @change="onChange" />
```

## 参数

- **defaultData** `String(必选)` 默认传入的 HTML 字符串。
- **placeholder** `String(可选)` 默认提示语
- **height** `Number(可选)` 编辑区域的高度
- **menus** `Array(可选)` 自定义菜单 [参考文档](http://www.wangeditor.com/doc/pages/03-%E9%85%8D%E7%BD%AE%E8%8F%9C%E5%8D%95/01-%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8F%9C%E5%8D%95.html)
- **colors** `Array(可选)` 字体颜色和背景色
- **fontNames** `Array(可选)` 字体 [参考文档](http://www.wangeditor.com/doc/pages/03-%E9%85%8D%E7%BD%AE%E8%8F%9C%E5%8D%95/03-%E9%85%8D%E7%BD%AE%E5%AD%97%E4%BD%93.html)
- **fontSizes** `Object(可选)` 字体大小(字号) [参考文档](http://www.wangeditor.com/doc/pages/03-%E9%85%8D%E7%BD%AE%E8%8F%9C%E5%8D%95/04-%E9%85%8D%E7%BD%AE%E5%AD%97%E5%8F%B7.html)
- **lineHeights** `Array(可选)` 行高
- **showFullScreen** `Boolean(可选)，默认: false` 全屏功能

## 事件

### change(html)

当富文本编辑器状态发生改变时触发，触发间隔时间为 200ms。

- **html** `String` 返回最后编辑的 HTML 字符串。

## 方法

### append(html)
在编辑的文案后追加内容
- **html** `String` HTML标签内容
```js
this.$refs.editorv.append('<h1>追加的内容</h1>')
```

### clear()
清空编辑器内容
```js
this.$refs.editorv.clear()
```

