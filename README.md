# 基于Gulp项目目录搭建

### 搭建环境

- **使用说明**:

  - 首次安装 `npm install`

  - 指令: `gulp` `gulp build`

  - 任务(task):

    - `html` 自动复制到 **'/dist'** 目录

    - `sass` 编译sass，css文件复制到 **'/dist/css'** 目录

    - `es6` 使用`babel`编译es6语法，并将js文件复制到 **'/dist/js'** 目录

    - `images` 监听图片变化，并压缩复制到 **'/dist/images'** 目录

    - `connect` 监听 **html** 、 **sass** 、 **js** 、 **images** 实现浏览器自动刷新

    - `plumber` 阻止 **sass** 、 **js** 编译错误跳出

    - `build` 压缩代码，生成 **'/build'** 目录

- **项目依赖**:

`gulp` `gulp-babel` `gulp-babel` `gulp-htmlmin` `gulp-imagemin` `gulp-minify-css` `gulp-plumber` `gulp-ruby-sass` `gulp-uglify` `gulp-watch` `babel-preset-es2015` `gulp-connect` `gulp-cache` `gulp-autoprefixer`

- **项目结构**:

```
Build_Project/
├── node_modules/ (项目依赖)
├── build/ (上线目录)
├── dist/ (本地服务器目录)
└── src/ (生产目录)
    ├── css/
    ├── images/
    ├── js/
    └── index.html
```

### Changelog

#### v1.3.1  增加`src/images`目录，增加所有js文件监听

#### v1.3.0  自动添加CSS兼容性前缀

增加项目依赖: `gulp-autoprefixer`

#### v1.2.1  修改网站热加载BUG

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
