# 获取焦点

自动选中某个元素的焦点

在使用此指令前请查看[vue-focus文档](https://github.com/simplesmiler/vue-focus)。

<template>
  <input
    type="text"
    v-focus="show"
    placeholder="此表单已经被默认设为焦点..."
    style="width: 200px"
  />
</template>

<script>
import { focus } from 'vue-focus';

export default {
  directives: { focus },
  data() {
    return {
      show: true,
    };
  },
};
</script>

## 局部注册
```vue
<template>
  <div>
    <input type="text" v-focus="show">
  </div>
</template>

<script>
import { focus } from 'vue-focus';

export default {
  directives: { focus },
  data() {
    return {
      show: true,
    };
  },
};
</script>
```

