# x-build 4.2.0

### 前言

x-build v4.2.0 已完成webpack4.8.1升级。

### 起步
```
  git clone https://github.com/codexu/x-build.git
  cd x-build
  npm install
  /* 网速不好请使用cnpm(https://npm.taobao.org) */
  npm run dev
  /* webpack-dev-server监听3000端口(http://localhost:3000/)，支持HMR热更新 */
```

### 生产模式
```
  npm run build
  /* js编译打包、css分离、第三方库抽离 */
```

### 风格指南

> html采用pug模板引擎（原名jade），使用缩进的代码风格。 >>> [参考文档](https://pug.bootcss.com/api/getting-started.html)

```pug
  //- pug模版引擎
  html(lang="en")
  head
    meta(charset="UTF-8")
    title x-build
  body
    include ./components/x-build.pug
```

> css预处理器采用stylus，代码风格类似sass。 >>> [参考文档](http://stylus-lang.com/)

```stylus
@import "../utils/reset.styl"
.container
  width 300px
  img
    width 150px
    height 150px
  h1
    margin-top 20px
```

> 支持bable编译ES6

```javascript
class xLoader {
  constructor(opts) {
    this.wrapper = opts.wrapper
  }
  init() {
    console.log('do something...')
  }
}
```

### 功能模块

> pug、stylus、es6编译压缩

> css autoprefixer 前缀自动补全

> [px2rem-loader + hotcss.js 自适应布局解决方案](https://github.com/codexu/Issues/issues/11)

> css代码抽离、第三方库抽离

> webpack-dev-server 支持HMR热更新

> source-map更快定位源码

> base64处理小于8kb图片

> hash命名

### 插件

> [x-loader图片加载loading控制插件](https://github.com/codexu/Issues/issues/12)