<h1 align="center">X-BUILD 2.0</h1>
<p align="center">基于gulp&webpack的自动化搭建工具</p>
<br>

## 介绍

x-build是基于`gulp`组建的自动化构建工具，使用express推荐的极简风格的jade模版引擎，配合sass高效整洁的搭建页面，并通过webpack&babel实现了es6模块化开发。

## 功能

`jade模版引擎编译` `sass编译` `es6编译(使用babel编译es5或es3,请根据需求配置.babelrc)` `服务器热加载` `autoprefixer` `base-64` `代码压缩` `图片压缩`

## 起步

> 开发依赖安装: `npm install`

> express server依赖安装: `cd server/` `npm install`

> 监听: `gulp --watch`

> 打包: `gulp --build`
