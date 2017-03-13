# 基于Gulp项目目录搭建

- 创建项目：`npm install`

- 依赖环境：`gulp` `gulp-babel` `gulp-babel` `gulp-htmlmin` `gulp-imagemin` `gulp-minify-css` `gulp-plumber` `gulp-ruby-sass` `gulp-uglify` `gulp-watch` `babel-preset-es2015`

### Gulp-Task命令

- `gulp` 自动创建 `dist` 目录（未压缩），用于开发测试环境。

- `gulp build` 自动创建 `build` 目录（压缩），用于上线项目。

- `gulp html` 将src目录下的 `html` 文件复制到 `dist` 目录。

- `gulp sass` 编译 `sass` 并复制到 `dist/css` 目录。

- `gulp js` 编译 `es6` 并复制到 `dist/js` 目录。

- `gulp images` 压缩图片并复制到 `dist/images` 目录。
