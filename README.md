# x-build 基于Gulp的自动化搭建工具

## 搭建环境

> npm安装： `npm install x-build`

> git安装： `git clone https://github.com/codexu/x-build.git`

## 使用说明

本项目基于`Gulp`，满足日常的压缩、编译功能，功能包括`sass`、`jade`、`es6` + `webpack`打包编译、图片压缩、热更新。

- 依赖安装 `npm install`

- 默认端口 `8080` , 执行gulp后访问: http://localhost:8080/

## 指令

  `gulp` : 启动项目自动化编译工具。

  `gulp del` : 清理 `server` 目录。

## 项目结构

```
x-build/
├── server/ (服务器目录)
└── app/ (生产目录)
    ├── css/
    ├── images/
    ├── js/
    └── index.jade
```


## Changelog

- #### v1.6.0

  添加 `webpack` 打包工具，babel-loader编译es6语法，实现模块化的javascript。

  添加 `gulp-rename` 为压缩后的文件添加 `.min` 结尾。(app.min.css, app.min.js)

- #### v1.5.1

  修复app/images下图片不能监听的bug

- #### v1.5.0

  重构项目结构，开发目录由`src`修改为`app`，测试服务器目录与打包目录合并为`server`。

  剔除`gulp build`命令，上线的目录为`server`。

  添加新命令`gulp del`，用以清理server目录。

- #### v1.4.5

  优化图片压缩速度太慢的bug，添加 `imagemin-pngquant` 深度压缩。
  当监听图片时，如果直接复制大量图片，会导致压缩效率很低，可以重新启动gulp快速压缩。

- #### v1.4.4

  修复 `gulp-autoprefixer` 配置错误的bug，导致不自动添加前缀。

- #### v1.4.3

  增加 `favicon.ico`

- #### v1.4.2

  `scr/css` 目录下添加 `font` 目录，添加 `auto` 和 `build` 事件。

- #### v1.4.1

  修改项目目录结构

- #### v1.4.0

  增加项目依赖: `gulp-jade`

  所有的html均使用jade模板引擎

  所有的css由scss转变为sass

- #### v1.3.1  增加`src/images`目录，增加所有js文件监听

- #### v1.3.0  自动添加CSS兼容性前缀

  增加项目依赖: `gulp-autoprefixer`

- #### v1.2.1  修改网站热加载BUG

- #### v1.2.0  优化图片压缩

  增加项目依赖: `gulp-cache` (用于图片压缩拉取缓存)

  修改 `images` 事件，使用 `gulp-watch` 监听增加新文件。

  对 `imagemin` 增加配置

  ```
  optimizationLevel: 5,  // 优化等级
  progressive: true,     // 无损压缩jpg图片
  interlaced: true,      // 隔行扫描gif进行渲染
  multipass: true        //多次优化svg直到完全优化
  ```

- #### v1.1.0  启动服务器并实现网站热加载

  增加项目依赖: `gulp-connect` (项目热加载)

  ```
  // gulp-connect options
  port: 8080,
  root: './src',
  livereload: true
  ```

  监听`./src`目录下的所有文件。
