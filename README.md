# 基于Gulp项目目录搭建

### 项目依赖

- 项目依赖：`gulp` `gulp-babel` `gulp-babel` `gulp-htmlmin` `gulp-imagemin` `gulp-minify-css` `gulp-plumber` `gulp-ruby-sass` `gulp-uglify` `gulp-watch` `babel-preset-es2015` `gulp-connect`

### Gulp-Task命令

- `gulp` 自动创建 `dist` 目录（未压缩），用于开发测试环境。

- `gulp build` 自动创建 `build` 目录（压缩），用于上线项目。

- `gulp html` 将src目录下的 `html` 文件复制到 `dist` 目录。

- `gulp sass` 编译 `sass` 并复制到 `dist/css` 目录。

- `gulp js` 编译 `es6` 并复制到 `dist/js` 目录。

- `gulp images` 压缩图片并复制到 `dist/images` 目录。

### Changelog

  #### v1.1.0

  增加项目依赖: `gulp-connect` (项目热加载)

  ```
  // gulp-connect options
  port: 8080,
  root: './src',
  livereload: true
  ```

  监听`./src`目录下的所有文件。
