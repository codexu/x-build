# 快捷键绑定

通过指令绑定快捷键。

在使用此指令前请查看[v-hotkey文档](https://github.com/Dafrok/v-hotkey)。

<template>
  <button v-hotkey="keymap">按下 A 键</button>
</template>

<script>
import VueHotkey from 'v-hotkey';

export default {
  directives: {
    hotkey: VueHotkey.directive,
  },
  methods: {
    alertEnter() {
      alert('你按下了 A 键！')
    },
  },
  computed: {
    keymap() {
      return {
        A: this.alertEnter,
      };
    },
  },
}
</script>

## 局部注册

```vue
<template>
  <button v-hotkey="keymap">hotkey</button>
</template>

<script>
import VueHotkey from 'v-hotkey';

export default {
  directives: {
    hotkey: VueHotkey.directive,
  },
  methods: {
    hide() {
      console.log('hide);
    },
  },
  computed: {
    keymap() {
      return {
        enter: this.hide,
      };
    },
  },
};
</script>
```

## 全局注册

```js
// @/directive/index.js
import Vue from 'vue'
import VueHotkey from 'v-hotkey'

Vue.use(VueHotkey)
```