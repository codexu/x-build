# 代码编辑器

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
    import('m-code').then(module => {
      this.dynamicComponent = module.default.component
    })
  }
}
</script>


## 安装

```
npm install m-code --save
```

## 引入

### 全局引入（不推荐）

@/components/index.js

```js
import MCode from 'm-code';
Vue.use(MCode);
```

### 局部引入（推荐）

默认引入方式：

```vue {5}
<script>
import { MCode } from 'm-code';

export default {
  components: { MCode },
};
</script>
```

使用**自定义组件名**：

```vue {6}
<script>
import MCode from 'm-code';

export default {
  components: {
    'my-code': MCode.component,
  },
};
</script>
```

## 使用方法

```vue
<m-code />
```

## 参数

- **value** `String(可选，默认：“”)` 初始值
- **language** `String(可选，默认："javascript")` 语法类型
- **showMode** `Boolean(可选，默认：true)` 是否显示语法类型选择框
- **modes** `Array(可选，默认：⬇️ )` 所有的语法类型
```js
[
  { value: 'css', label: 'CSS' },
  { value: 'javascript', label: 'Javascript' },
  { value: 'html', label: 'XML/HTML' },
  { value: 'x-java', label: 'Java' },
  { value: 'x-objectivec', label: 'Objective-C' },
  { value: 'x-python', label: 'Python' },
  { value: 'x-rsrc', label: 'R' },
  { value: 'x-sh', label: 'Shell' },
  { value: 'x-sql', label: 'SQL' },
  { value: 'x-swift', label: 'Swift' },
  { value: 'x-vue', label: 'Vue' },
  { value: 'markdown', label: 'Markdown' }, 
]
```

## 事件

### language-change(language)

选择语法类型时触发

- **language** `String` 获取语法类型

```vue
<m-code @language-change="languageChange" />
```

```js {2}
methods: {
  languageChange(language) {},
}
```

### input(value)

编辑器输入内容时触发

- **value** `String` 获取编辑器内容

```vue
<m-code @input="inputChange" />
```

```js {2}
methods: {
  inputChange(value) {},
}
```







