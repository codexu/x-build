# Components 使用规范

## 安装

从 x-build@1.1.0 版本开始，大部分独立的组件均已拆分成为独立的仓库管理，脚手架不会集成，需要单的的安装与引用。

### 基础组件

脚手架默认仅集成了 `m-static` 和 `m-svg` 两个全局注册的组件，这是因为这两个组件必然会被所有的项目和大多数项目中的页面所应用，并且这两个组件体积小巧，不会对最后的打包结果产生巨大的影响。

### 其他组件

除了上述提到的两个组件，其他组件均以 vue 插件的形式被发布到公司的 NPM 私服中，如果不能正确安装，请参考[NPM 配置](/Overview/NPM.md)。

## 引入组件

所有的组件均以 Vue 插件的形式发布，整个包以两种形式导出

- **export default**  `Vue Plugin` Vue 插件，其中包含 install 方法，可以使用 **Vue.use()** 安装。
- **export**  `{ Compontent }` Vue 组件，可以直接通过 **Vue.components()** 注册组件。

### 全局引入

```js
import MExample 'm-example';
Vue.use(MExample);
```

### 局部引入

默认引入方式：

```vue {5}
<script>
import { MExample } from 'm-example';

export default {
  components: { MExample },
};
</script>
```

使用**自定义组件名**：

```vue {6}
<script>
import MExample from 'm-example';

export default {
  components: {
    'my-example': MExample.component,
  },
};
</script>
```

## 开发组件

### 开发规范

当你决定开发一个新的组件时，请确保遵循下面几个**规则**：

- 保证组件的可复用性。
- 不存在 UI 设计时，尽量保证不添加任何样式。
- 保证接口命名保证有意义的名词、简短、具有可读性。
- 源码风格，保证与脚手架开发的风格一致。
- 组件必须定义 name，规则为 `m-{name}`。

### Vue 插件封装模板

可以 **clone** 一个已有的组件代码库，删除 git 并重新初始化 git，在此基础上做二次开发：

- 修改 `@/src/index.js` 保证导入组件时的命名正确性和使用方式的统一性。
- 删除 `@/src` 中的其他文件，换成你的项目代码。
- 需要用到的依赖，安装并确保已添加到 **dependencies**。
- **package.json** 对 `name`、`version` 做好管理。


@/src/index.js

```js
import MExample from './index.vue';

export default {
  install(Vue) {
    Vue.component(MExample.name, MExample);
  },
  component: MExample,
};

export { MExample };
```

### 编写文档

封装组件并发布到 NPM 上的同时，也应该保证产生相应的使用文档：

- Fork [x-build](http://39.99.247.200:8000/root/x-build) 仓库。
- 在 `documents/docs/Components` 中创建 **markdown** 文档。
- 在 `documents/docs/.vuepress/config.js` 中，将已填加的组件文档编辑到配置文件中。
- 文档编辑风格，请参考已有的组件文档。

::: tip 提示
对 markdown 不了解，请查看 [markdown语法](https://markdown-zh.readthedocs.io/en/latest/)，只需几分钟即可轻松上手。
:::
