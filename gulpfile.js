const gulp = require('gulp')
const uglify = require('gulp-uglify')
const minifyCSS = require('gulp-minify-css')
const imagemin = require('gulp-imagemin')
const sass = require('gulp-ruby-sass')
const watch = require('gulp-watch')
const rename = require("gulp-rename")
const concat = require('gulp-concat')
const fontSpider = require('gulp-font-spider')
const package = require('./package.json')

const componentJS = "src/js/components/"
const bowerSrc = "bower_components/"
// 压缩 js 文件
gulp.task('script', function() {
    gulp.src([bowerSrc + 'jquery/dist/jquery.slim.js',
              componentJS + 'component.js',
              'src/js/app.js'
            ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(rename({ suffix: '.min' }))
})

// 压缩图片
gulp.task('images', function () {
    gulp.src('src/images/*.{png,jpg,gif,ico,JPG,PNG,GIF,ICO}')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
})

// 编译sass
gulp.task('sass', function () {
    return sass('src/css/app.scss')
	   .on('error', function (err) {
            console.error('Error!', err.message)
        })
        // 压缩编译好的css文件
        .pipe(minifyCSS())
        // 将编译并压缩的css文件另存到dist/css目录下
        .pipe(gulp.dest('build/css'))
        .pipe(rename({ suffix: '.min' }))
})

// 字体
gulp.task('font', function() {
    return gulp.src('./index.html')
        .pipe(fontSpider());
});

// 自动监听
gulp.task('auto', function () {
    gulp.watch('src/js/*', ['script']),
    gulp.watch('src/js/components/*', ['script']),
    gulp.watch('src/images/*.*)', ['images']),
    gulp.watch('src/css/*', ['sass']),
    gulp.watch('src/css/components/*', ['sass']),
    gulp.watch('./index.html', ['font'])
})

// 打包
gulp.task('build', function () {
  gulp.src('./index.html').pipe(gulp.dest(package.name)),
  gulp.src('./build/**').pipe(gulp.dest(package.name + '/build'))
})

// 默认动作
gulp.task('default', ['script', 'sass', 'images', 'font', 'auto'])
