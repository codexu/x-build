/*  工具基本库  */
const gulp = require('gulp')                    // 引入gulp基础库
const watch = require('gulp-watch')             // 监听
const plumber = require('gulp-plumber')         // 防止编译错误报错终止监听
const connect = require('gulp-connect')         // 启动WEB服务，热加载
const del = require('del')                      // 清除垃圾文件

/*  htmlmin  */
const jade = require('gulp-jade');
const htmlmin = require('gulp-htmlmin')
/*  css  */
const cleanCSS = require('gulp-clean-css')    // css压缩
const sass = require('gulp-ruby-sass')          // sass编译
const autoprefixer = require('gulp-autoprefixer') // 兼容前缀
/*  javascript  */
const uglify = require('gulp-uglify')           // JS代码压缩
const babel = require('gulp-babel')             // ES6转换（gulp-babel babel-preset-es2015）
/*  images  */
const imagemin = require('gulp-imagemin')       // 图片压缩
const cache = require('gulp-cache')             // 拉取缓存
const pngquant = require('imagemin-pngquant')   // 深度压缩图片

/*  server输出路径  */
const SERVER_PATH = 'server'

gulp.task('connect', function() {
  connect.server({
    port: 8080,
    root: SERVER_PATH,
    livereload: true
  })
})

/*  编译jade并复制到sever目录  */
gulp.task('html', () => {
  gulp.src('./app/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(SERVER_PATH))
    .pipe(connect.reload())
})

/*  ico  */
gulp.task('ico', () => {
  gulp.src('./app/favicon.ico')
    .pipe(gulp.dest(SERVER_PATH))
})

/*  task:编译sass，并输出到server/css目录下  */
gulp.task('sass', () => {
  return sass('app/css/app.sass')
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0', 'Firefox <= 20'],
      cascade: true,
      remove:true
    }))
	  .on('error', function (err) {
      console.error('Error!', err.message)
    })
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(SERVER_PATH + '/css'))
    .pipe(connect.reload())
})

/*  task:JavaScript通过babel转化es5，并输出到server/js目录下  */
gulp.task('js', () => {
  gulp.src('./app/js/**/*')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(SERVER_PATH + '/js'))
    .pipe(connect.reload())
})

/*  压缩图片  */
gulp.task('images', () => {
  gulp.src('./app/images/**/*.{png,jpg,gif,ico,JPG,PNG,GIF,ICO}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
      use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
    }))
    .pipe(gulp.dest(SERVER_PATH + '/images'))
    .pipe(connect.reload())
})

/* font */
gulp.task('font', ()=> {
  return gulp.src('./app/css/font/**/*')
    .pipe(gulp.dest(SERVER_PATH + '/css/font'))
})

/* 清理server目录 */
gulp.task('del', (cb)=> {
  del([SERVER_PATH], cb)
})

// 自动监听
gulp.task('auto', () => {
    gulp.watch('./app/*.jade', ['html'])
    gulp.watch('./app/view/*.jade', ['html'])
    gulp.watch('./app/js/*', ['js'])
    gulp.watch('./app/js/class/*', ['js'])
    gulp.watch('./app/css/*', ['sass'])
    gulp.watch('./app/css/class/*', ['sass'])
    gulp.watch('./app/images/*)', ['images'])
    gulp.watch('./app/css/font/**/*)', ['font'])
    gulp.watch('./app/images/**/*)', ['images'])
})

// 默认动作
gulp.task('default', ['auto', 'html', 'ico', 'js', 'sass', 'connect', 'font', 'images'])
