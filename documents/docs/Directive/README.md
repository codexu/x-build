# Directives 使用规范

## 了解 Vue 自定义指令

在阅读本章内容前，应先阅读 [Vue官方文档 - 自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html)。

## 使用脚手架内置指令

默认情况只将`组件权限验证`指令集成于项目中，其他指令则需要按需加载。

::: tip 提示
文档中的第三方指令已经默认安装，仅需按照开发需求引入即可，此项操作不会对最后的打包体积产生影响。
:::

## 全局注册

可以通过 `@/directive/index.js` 中解除相应指令引用与第三方库引用的注释即可：(以 hotkey 为例)

```js
import Vue from 'vue'
import VueHotkey from 'v-hotkey'

Vue.use(VueHotkey)
```

> 仅限高频率使用的指令

## 局部注册

如果想注册局部指令，组件中也接受一个 directives 的选项：(以 hotkey 为例)

```vue {2,6,9-11}
<template>
  <button v-hotkey="">hotkey</button>
</template>

<script>
import VueHotkey from 'v-hotkey';

export default {
  directives: {
    hotkey: VueHotkey.directive,
  },
};
</script>
```

> 使用局部注册指令可以有效减少首屏加载时间。