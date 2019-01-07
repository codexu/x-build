# X-BUILD
[![Build Status](https://travis-ci.org/codexu/x-build-cli.svg?branch=master)](https://travis-ci.org/codexu/x-build-cli)
[![](https://img.shields.io/badge/npm-v4.4.10-blue.svg)](https://www.npmjs.com/package/x-build)
[![](https://img.shields.io/badge/cli-v1.4.9-blue.svg)](https://www.npmjs.com/package/x-build-cli)
[![](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/codexu/x-build/blob/master/LICENSE)

X-BUILD 是针对 H5 开发的一套自动化构建工具，致力于提升开发效率，减小开发难度。它可以让你在没有任何构建工具（例如 grunt 、 gulp 或 webpack 等工具）配置经验的情况下，帮你快速生成一个完整的前端工程，并可以打包代码和静态资源，使你的项目以最优异的性能上线。

### 功能特性

| Speciality | Description |
| :- | :- |
| devServer | [模块热替换(HMR - Hot Module Replacement)](https://webpack.docschina.org/concepts/hot-module-replacement/)可以显著加快开发速度。 |
| 自适应解决方案 | [px2rem](https://github.com/songsiqi/px2rem) + [hotcss](https://github.com/imochen/hotcss) 实现多终端显示一致。 |
| HTML | 支持[Pug](https://pug.bootcss.com/api/getting-started.html)模板引擎。 |
| Css | 支持sass、less、stylus样式预处理器，normalize重置样式，Postcss。 |
| JavaScript | [Webpack](https://webpack.docschina.org/concepts/)解决模块化，通过Babel编译成现代浏览器可执行的JavaScript。 |
| 代码规范 | 使用[ESLint](https://eslint.org/)避免低级错误和统一代码的风格。 |
| 静态资源服务 | 提供代码压缩、图片压缩、文件hash、base64处理等服务。 |

### 生态系统

| Project | Status | Description |
| :------ | :------ | :------ |
| <a href="https://github.com/codexu/x-build">X-BUILD</a> | <img src="https://img.shields.io/badge/npm-v4.4.10-blue.svg"> | 基于Webpack的工程模板，CLI create时会被下载。 |
| <a href="https://github.com/codexu/x-build-cli">X-BUILD-CLI</a> | <img src="https://img.shields.io/badge/npm-v1.4.9-blue.svg"> | 脚手架工具，快速生成工程目录，并安装依赖。 |
| <a href="https://github.com/codexu/x-fullpage">X-FULLPAGE</a> | <img src="https://img.shields.io/badge/npm-v1.2.2-blue.svg"> | 适用于移动端的整屏滚动插件，支持动画触发。 |
| <a href="https://github.com/codexu/x-load">X-LOAD</a> | <img src="https://img.shields.io/badge/npm-v1.3.4-blue.svg"> | 创建Loading效果、控制图片加载方式。 |
| <a href="https://github.com/codexu/x-animate">X-ANIMATE</a> | <img src="https://img.shields.io/badge/npm-v1.0.2-blue.svg"> | 屏幕滚动执行相应动画，支持动画组和生命周期回调。 |
| <a href="https://github.com/codexu/x-touch">X-TOUCH</a> | <img src="https://img.shields.io/badge/npm-v1.2.1-blue.svg"> | 使原生DOM支持轻触、长按和滑动事件。 |
| <a href="https://github.com/codexu/x-music">X-MUSIC</a> | <img src="https://img.shields.io/badge/npm-v1.0.2-blue.svg"> | 设置背景音乐与按钮控制。 |

### 讨论交流

#### QQ群

欢迎加入 QQ交流群（374406559），在这里可以互相交流前端问题。

#### 提问 & BUG

请将BUG提交在不同项目的 **Github issues** 里：

[X-BUILD模板](https://github.com/codexu/x-build/issues) | 
[CLI工具](https://github.com/codexu/x-build-cli/issues) | 
[X-FULLPAGE](https://github.com/codexu/x-fullpage/issues) | 
[X-LOAD](https://github.com/codexu/x-load/issues) | 
[X-ANIMATE](https://github.com/codexu/x-animate/issues) | 
[X-TOUCH](https://github.com/codexu/x-touch/issues) | 
[X-MUSIC](https://github.com/codexu/x-music/issues)

### 使用文档
[https://codexu.github.io/](https://codexu.github.io/)