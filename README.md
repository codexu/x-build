# 基于Gulp项目目录搭建

### 项目依赖

- 项目依赖：`gulp` `gulp-babel` `gulp-babel` `gulp-htmlmin` `gulp-imagemin` `gulp-minify-css` `gulp-plumber` `gulp-ruby-sass` `gulp-uglify` `gulp-watch` `babel-preset-es2015` `gulp-connect` `gulp-cache`

### Gulp-Task命令

- `gulp` 自动创建 `dist` 目录（未压缩），用于开发测试环境。

- `gulp build` 自动创建 `build` 目录（压缩），用于上线项目。

- `gulp html` 将src目录下的 `html` 文件复制到 `dist` 目录。

- `gulp sass` 编译 `sass` 并复制到 `dist/css` 目录。

- `gulp js` 编译 `es6` 并复制到 `dist/js` 目录。

- `gulp images` 压缩图片并复制到 `dist/images` 目录。

### Changelog

#### v1.2.0  优化图片压缩

增加项目依赖: `gulp-cache` (用于图片压缩拉取缓存)

- 修改 `images` 事件，使用 `gulp-watch` 监听增加新文件。

- 对 `imagemin` 增加配置

```
optimizationLevel: 5,  // 优化等级
progressive: true,     // 无损压缩jpg图片
interlaced: true,      // 隔行扫描gif进行渲染
multipass: true        //多次优化svg直到完全优化
```

#### v1.1.0  启动服务器并实现网站热加载

增加项目依赖: `gulp-connect` (项目热加载)

```
// gulp-connect options
port: 8080,
root: './src',
livereload: true
```

监听`./src`目录下的所有文件。
