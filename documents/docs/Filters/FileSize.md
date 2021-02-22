# 文件大小

**filter.fileSize**

根据文件大小将 Bytes 转化为 ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 显示，并保留两位小数。

```vue
<p>{{ 1024 * 1024 | fileSize }}</p>
// 1.00MB
```