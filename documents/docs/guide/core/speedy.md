# 便捷功能

::: tip 推荐使用 setup 语法
X-BUILD 生成的模板文件全部使用 setup 语法。
:::

setup 语法大大简化冗余代码，释放了我们的双手，但有我们仍可以做一些更加方便的优化。（这并不会对你的心智产生多大影响！）

## script 标签支持 name 属性

使用 **setup** 语法带来的第一个问题就是无法自定义 name，而我们使用 keep-alive 往往是需要 name 的，解决这个问题通常是通过写两个 **script** 标签来解决，一个使用 setup，一个使用 defineComponent，但是这种语法看起来十分奇怪：

```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '***'
})
</>

<script lang="ts" setup>
// ...
</script>
```

X-BUILD 借助插件 [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend) 解决了这个问题，可以直接在 script 标签上定义 name：

```vue
<script lang="ts" setup name="***">
// ...
</script>
```

## API 自动导入

对于一些常用的 Vue3 API，比如 ref、computed、watch 等，每次都需要我们在页面上手动进行 import，X-BUILD 通过[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 实现自动导入，无需 import 即可在文件里使用Vue的API。

```vue
<script lang="ts" setup name="***">
const count = ref(0)

onMounted(() => {
  console.log('mounted')
})
</script>
```

::: tip 提示
- src 目录下的 auto-imports.d.ts 文件是自动生成的。
- 在没有 import 的情况下使用会导致 eslint 提示报错，X-BUILD 已经帮你通过在 eslintrc.js 安装插件 [vue-global-api](https://github.com/antfu/vue-global-api) 解决了这个问题。
:::

## 关于 .value

ref 要求我们访问变量时需要加上.value，如果这让你觉得难受，你可以通过开启官方提供的另一种方式，在 ref 前加上 $，该功能默认是关闭状态，你可以手动开启：

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      refTransform: true // 开启ref转换
    })
  ]
})
```

开启后你可以这样写：

```vue
<script lang="ts" setup name="***">
let count = $ref(1)

const addCount = () => {
  count++
}
</script>
```

::: warning 提示
暂不建议使用此方式。
:::