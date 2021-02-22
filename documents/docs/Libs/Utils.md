# 工具函数

## 替换标签页标题

`@libs/utils/title.js`

**replaceTitle(text)**

- text `String` 需要拼接的标题文字

> 通过获取 `.env` 环境变量 `VUE_APP_TITLE`，与传入参数 `text` 进行字符串拼接，最终通过 `window.document.title` 直接替换浏览器标签页标题。

默认清空下已经在 Router 切换的时候自动替换，传入的字符串为 `Routes` 配置 `meta` 中的 `title` 属性。可以通过此项函数直接替换需要显示的标题名称。

## 处理默认请求链接

`@libs/utils/baseUrl.js`

**baseUrl(port)**

- port `Number` 端口号

通过环境变量+端口号返回 API 请求前缀，这适用于同一 IP 地址下有多个不同端口的请求。