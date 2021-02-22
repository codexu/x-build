# 日期时间

**filter.date**

基于 dayjs 开发，支持中文。

- 参数 format 字符串，参考[配置](https://day.js.org/docs/en/display/format#docsNav)。

```vue
<p>{{ new Date() | date }}</p>
// 2020-10-13 15:38:39
```