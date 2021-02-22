# 区分环境的链接

**filter.url**

自动根据环境变量替换相应的 url 前缀，例如线上使用 OSS 静态资源，本地开发使用本地的静态资源服务器。

```vue
<p>{{ '/images/logo.png' | url }}</p>
本地：
// http:localhost:8888/images/logo.png
线上：
// http://oss.com/images/logo.png
```
