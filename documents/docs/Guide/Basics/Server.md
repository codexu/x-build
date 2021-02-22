# 异步请求

## 接口定义

- 所有的接口应定义在 `@/api` 文件夹内。

## 使用封装的 request.js 发送请求

@/libs/request.js 是基于 [axios](https://www.kancloud.cn/yunye/axios/234845) 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 request.js。 它封装了全局 request 拦截器、response 拦截器、统一的错误处理、baseURL 设置等。

## 配置接口地址

默认的请求地址在 .env

```
VUE_APP_API=/api/
```

### 环境区分

如果希望不同的环境使用不同的请求地址，可以在 .env.development 或 .env.production 中添加设置：

```
VUE_APP_API=/api-dev/
```

## 响应拦截

在 @/libs/request.js 中定义响应拦截。

### 默认约定

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
