# Mock 数据

`v1.1.9 新增`

Mock 数据功能是基于 [mock.js](http://mockjs.com/) 开发，支持通过 webpack 进行自动加载 mock 配置文件。

## 使用方式

- 所有的 mock 配置文件均应放置在 `@/mock/services` 路径内。
- 在 `@/mock/services` 内部可以建立业务相关的文件夹分类存放配置文件。
- 所有的配置文件应按照 `***.mock.js` 的命名规范创建。
- 配置文件使用 ES6 Module 导出 `export default` 或 `export` 一个数组。

## 示例模板

示例模板 `@/mock/service/example.mock.js` 已经内置于脚手架内，可以直接修改使用或作为参考：

```js
import Mock from 'mockjs';

const { Random } = Mock;

export default [
  RegExp('/example.*'),
  'get',
  {
    'range|50-100': 50,
    'data|10': [
      {
        // 唯一 ID
        id: '@guid()',
        // 生成一个中文名字
        cname: '@cname()',
        // 生成一个 url
        url: '@url()',
        // 生成一个地址
        county: Mock.mock('@county(true)'),
        // 从数组中随机选择一个值
        'array|1': ['A', 'B', 'C', 'D', 'E'],
        // 随机生成一个时间
        time: '@datetime()',
        // 生成一张图片
        image: Random.dataImage('200x100', 'Mock Image'),
      },
    ],
  },
];
```

## 配置文件

配置文件是由一个长度为 `3` 的**数组**构成：

```js
[url, method, template]
```

- **url** `String` 表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。
- **method** `String` 表示需要拦截的 Ajax 请求类型。例如 get、post、put、delete 等。
- **template** `String | Object | Function` 表示数据模板，可以是字符串、对象或者一个函数。

关于 **template** 的配置方式，参考 mock.js [文档](https://github.com/nuysoft/Mock/wiki) 或 [示例](http://mockjs.com/examples.html)。

## 常见问题

### 1.GET 请求如何拦截携带 query 的请求？

Mock.js 对 query 没有做处理，但是可以通过正则的方式进行匹配，例如：`RegExp('/example.*')`。

### 2.POST 请求如何获得请求体的信息？

template 配置时使用函数的形式，函数附带一个 options 参数，可以获得请求题的信息。

### 3.创建好配置文件后如何引用？

只要按照规范创建配置文件，脚手架会自动引入配置文件，并自动使用 mock.js 加载配置。这步节省时间的操作是通过 **webpack** [require.context](https://webpack.docschina.org/api/module-methods/#requirecontext) 实现的：

```js
import Mock from 'mockjs';

const context = require.context('./services', true, /\.mock.js$/);

context.keys().forEach((key) => {
  Mock.mock(...context(key).default)
});
```

### 4.项目上线后，如何删除 Mock 功能？

Mock 功能开启的时候，会拦截所有的请求，也就是你**无法进行服务端请求**。Mock 在 `@/main.js` 中引入，你可以查看该文件的源代码，并找到 `import '@/mock'` 这样的代码。（去除它 可完整的将项目中的 mock 拦截去除）