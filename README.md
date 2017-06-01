# x-build 基于Gulp的自动化搭建工具

## 搭建环境

> npm安装： `npm install x-build`

> git安装： `git clone https://github.com/codexu/x-build.git`

## 使用说明

本项目基于Gulp，满足日常的压缩、编译功能，功能包括sass、jade、es6编译、图片压缩、热更新。

- 依赖安装 `npm install`

- 指令: `gulp` `gulp build`

## 项目依赖

`gulp` `gulp-babel` `gulp-babel` `gulp-htmlmin` `gulp-imagemin` `gulp-minify-css` `gulp-plumber` `gulp-ruby-sass` `gulp-uglify` `gulp-watch` `babel-preset-es2015` `gulp-connect` `gulp-cache` `gulp-autoprefixer` `gulp-jade`

## 项目结构

```
x-build/
├── node_modules/ (项目依赖)
├── build/ (上线目录)
├── dist/ (本地服务器目录)
└── src/ (生产目录)
    ├── css/
    ├── images/
    ├── js/
    └── index.jade
```


## Changelog

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
