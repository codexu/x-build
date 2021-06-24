# 跨域问题

## CORS

CORS 全称为 Cross Origin Resource Sharing（跨域资源共享）。这种方案对于前端来说没有什么工作量，和正常发送请求写法上没有任何区别，工作量基本都在后端这里。每一次请求，浏览器必须先以 OPTIONS 请求方式发送一个预请求（也不是所有请求都会发送 options，展开介绍 点我），通过预检请求从而获知服务器端对跨源请求支持的 HTTP 方法。在确认服务器允许该跨源请求的情况下，再以实际的 HTTP 请求方法发送那个真正的请求。推荐的原因是：只要第一次配好了，之后不管有多少接口和项目复用就可以了，一劳永逸的解决了跨域问题，而且不管是开发环境还是正式环境都能方便的使用。

## 本地代理

本地配置代理：`vue.config.js`，仅能在开发环境使用：

```js
devServer: {
  proxy: {
    '/api': {
      target: 'http://47.100.186.132/your-path/api',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
```
