# Filters 使用规范

Vue.js 允许自定义过滤器，可被用于一些常见的文本格式化。

- 双花括号插值和 `v-bind` 表达式。
- 过滤器应该被添加在 `JavaScript` 表达式的尾部，由 **管道** 符号指示。
- 过滤器是 `JavaScript` 函数，可以接收参数。

```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 带参数 -->
{{ message | capitalize(100) }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

查看[过滤器文档](https://cn.vuejs.org/v2/guide/filters.html)。

## 自定义过滤器

在 `@/libs/filters` 目录下创建你的过滤器函数，并在同级目录的 `index.js` 注册此过滤器。

```js
import example from './example';
Vue.filter('example', example);
```

## 内置过滤器

| 过滤器 | 说明 | 文件路径 | 依赖 |
|  ---- | ----  | ---- | ---- |
| [date](/Filters/Date)  | 日期时间 | @/libs/filters/date.js | dayjs |
| [remainin](/Filters/remainin)  | 剩余时间 | @/libs/filters/remainin.js |  |
| [url](/Filters/url)  | 区分环境的链接 | @/libs/filters/url.js | process.env |
| [fileSize](/Filters/fileSize)  | 文件大小 | @/libs/filters/fileSize.js |  |
| [number](/Filters/number)  | 数字金额 | @/libs/filters/number.js |  |
| [float](/Filters/float)  | 浮点型精度 | @/libs/filters/float.js | lodash { round, ceil, floor } |