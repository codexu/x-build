### Changelog

- #### v1.7.3

  由于webpack打包比较慢，js目录下添加lib目录存放js库。

- #### v1.7.1

  所有的 `gulp.watch` 替换为 `gulp-watch`，解决新增文件和删除文件不能监听的bug。

  jade将`block title`单独分离管理，内容区域更改为 `block main`。

- #### v1.7.0

  增加项目依赖 `gulp-base64`，将css中用到的小图片以base64的方式转码，减少服务器请求。

- #### v1.6.2

  修改css目录结构。

- #### v1.6.1

  修改jade布局方式，采用 `extends layout` 的方式，组件采用 `include` 的方式。

  修改部分路径不能正确监听的bug。

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
