/*  工具基本库  */
const gulp    = require('gulp')                   // 引入gulp基础库
const watch   = require('gulp-watch')             // 监听
const plumber = require('gulp-plumber')           // 防止编译错误报错终止监听
const connect = require('gulp-connect')           // 启动WEB服务，热加载
const del     = require('del')                    // 清除垃圾文件
const rename  = require('gulp-rename')
const base64  = require('gulp-base64')

/*  htmlmin  */
const jade    = require('gulp-jade');
const htmlmin = require('gulp-htmlmin')

/*  css  */
const cleanCSS     = require('gulp-clean-css')    // css压缩
const sass         = require('gulp-ruby-sass')    // sass编译
const autoprefixer = require('gulp-autoprefixer') // 兼容前缀

/*  javascript  */
const uglify      = require('gulp-uglify')        // JS代码压缩
const webpack     = require('webpack')
const gulpWebpack = require('webpack-stream')

/*  images  */
const imagemin = require('gulp-imagemin')         // 图片压缩
const cache    = require('gulp-cache')            // 拉取缓存
const pngquant = require('imagemin-pngquant')     // 深度压缩图片

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
  return sass('./app/css/app.sass')
    .pipe(plumber())
    .pipe(base64({
      extensions: ['svg', 'png', /\.jpg#datauri$/i],
      maxImageSize: 8*1024, // bytes
      debug: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0', 'Firefox <= 20'],
      cascade: true,
      remove:true
    }))
	  .on('error', function (err) {
      console.error('Error!', err.message)
    })
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
      basename:'app',
      extname:'.min.css'
    }))
    .pipe(gulp.dest(SERVER_PATH + '/css'))
    .pipe(connect.reload())
})

/*  task:JavaScript通过babel转化es5，并输出到server/js目录下  */
gulp.task('js', () => {
  gulp.src('./app/js/app.js')
    .pipe(plumber())
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(rename({
      basename:'app',
      extname:'.min.js'
    }))
    .pipe(gulp.dest(SERVER_PATH + '/js'))
    .pipe(connect.reload())
})

/*  压缩图片  */
gulp.task('images', () => {
  gulp.src('./app/images/**/*')
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
  gulp.src('./app/css/font/**/*')
    .pipe(gulp.dest(SERVER_PATH + '/css/font'))
})

/* lib */
gulp.task('lib', ()=> {
  gulp.src('./app/js/lib/*')
    .pipe(gulp.dest(SERVER_PATH + '/js/lib'))
})

/* 清理server目录 */
gulp.task('del', (cb)=> {
  del([SERVER_PATH], cb)
})

// 自动监听
gulp.task('watch-html', () => {
  return watch('./app/**/*.jade', function () {
    gulp.start('html')
  })
})
gulp.task('watch-js', () => {
  return watch('./app/js/**/*.js', function () {
    gulp.start('js')
  })
})
gulp.task('watch-sass', () => {
  return watch('./app/css/**/*.sass', function () {
    gulp.start('sass')
  })
})
gulp.task('watch-images', () => {
  return watch('./app/images/**/*', function () {
    gulp.start('images')
  })
})
gulp.task('watch-font', () => {
  return watch('./app/css/font/**/*', function () {
    gulp.start('font')
  })
})
gulp.task('watch-ico', () => {
  return watch('./app/favicon.ico', function () {
    gulp.start('ico')
  })
})
gulp.task('watch-lib', () => {
  return watch('./app/js/lib/*', function () {
    gulp.start('lib')
  })
})

// 默认动作
gulp.task('default', ['watch-html', 'watch-js', 'watch-sass', 'watch-images', 'watch-font', 'watch-ico', 'watch-lib', 'html', 'ico', 'js', 'sass', 'connect', 'font', 'images', 'lib'])
