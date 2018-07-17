<p align="center" style="border-radius: 10px;"><img width="180" src="https://github.com/codexu/_images/blob/master/x-logo/logo-180-180.jpg?raw=true" alt="x-build"></p>

<p align="center">
  <img src="https://img.shields.io/badge/version-4.3.10-blue.svg">
  <img src="https://img.shields.io/badge/webpack-4.8.1-brightgreen.svg">
  <img src="https://img.shields.io/badge/node->=6.11.5-brightgreen.svg">
</p>

<h1 align="center">x-build</h1>

`x-build`专注于移动端H5单个页面开发的webpack模板，现已升级到webpack4.8.1版本，拥有更快的编译和打包速度，采用`px2rem`+`hotcss`的自适应布局解决方案，使用`pug`模板引擎、`stylus`&`less`css预处理器，支持`es6`编译，ESlint规范代码，还有许多适用于移动端开发的插件。


## 起步

```
  /* x-build-cli安装(推荐) */
  npm install x-build-cli -g
  x-build init
```

```
  /* git安装 */
  git clone https://github.com/codexu/x-build.git
  
```

```
  /* 依赖安装 */
  npm install

  /* 开发模式 */
  npm start
  // 或 npm run dev
  
  /* 生产模式 */
  npm run build
```

## 目录结构

<p align="center">
  <img width="300" src="https://github.com/codexu/_images/blob/master/x-bulid/directory.png?raw=true">
</p>

## 功能

> pug、stylus、es6编译压缩

> css autoprefixer 前缀自动补全

> [px2rem-loader + hotcss.js 自适应布局解决方案](https://github.com/codexu/Issues/issues/11)

> css代码抽离、第三方库抽离

> webpack-dev-server 支持HMR热更新

> source-map更快定位源码

> base64处理小于8kb图片

> hash命名

## 风格指南

- html采用pug模板引擎（原名jade），使用缩进的代码风格。 >>> [参考文档](https://pug.bootcss.com/api/getting-started.html)

```pug
  //- pug模版引擎
  html(lang="en")
  head
    meta(charset="UTF-8")
    title x-build
  body
    include ./components/x-build.pug
```

- css预处理器采用stylus & less。 >>> [参考文档](http://stylus-lang.com/)

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

- 支持bable编译ES6

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

## 插件

> [x-loader图片加载loading控制插件](https://github.com/codexu/Issues/issues/12)

> [x-touch移动端滑动组件](https://github.com/codexu/x-touch)
