# HTTP

## 异步请求封装

脚手架推荐使用 `@/libs/request.ts` 发送请求，request.ts 是基于 [axios](https://github.com/axios/axios) 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 request.ts 它封装了全局 request 拦截器、response 拦截器、统一的错误处理、baseURL 设置等。

### 接口定义

- 所有的接口应定义在 `@/api` 文件夹内。

### 配置接口地址

默认的请求地址在 .env

```sh
VUE_APP_API=/api/
```

#### 环境区分

如果希望不同的环境使用不同的请求地址，可以在 .env.development 、.env.test 或 .env.production 中添加设置：

```sh
VUE_APP_API=/api-dev/
```

### 响应拦截

在 @/libs/request.ts 中定义响应拦截。

#### 默认约定

默认设置下 response.data 的数据格式应为如下所示：

```js
{
  // 接口约定的状态码 非 http 状态码
  code: 0,
  // 接口返回请求状态信息
  msg: '返回信息',
  // data 内才是真正的返回数据
  data: {
    list: [
      ...
    ]
  }
}
```

在响应拦截器中会对 http 状态码以及 response.data.code 进行判断，如果全部为正常将会返回 response.data.data，如果有错误将会触发日志记录和信息显示，如果是登录状态失效将自动清空本地的登录状态并退回到登录页面。所有的判断逻辑根据实际业务需要自行修改。

## 跨域问题

### CORS

CORS 全称为 Cross Origin Resource Sharing（跨域资源共享）。这种方案对于前端来说没有什么工作量，和正常发送请求写法上没有任何区别，工作量基本都在后端这里。每一次请求，浏览器必须先以 OPTIONS 请求方式发送一个预请求（也不是所有请求都会发送 options，展开介绍 点我），通过预检请求从而获知服务器端对跨源请求支持的 HTTP 方法。在确认服务器允许该跨源请求的情况下，再以实际的 HTTP 请求方法发送那个真正的请求。推荐的原因是：只要第一次配好了，之后不管有多少接口和项目复用就可以了，一劳永逸的解决了跨域问题，而且不管是开发环境还是正式环境都能方便的使用。

### 本地代理

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

## Mock 数据

X-BUILD 并不打算集成 Mock 功能。

如果你有需要，推荐使用 [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) 来进行 mock 数据处理。