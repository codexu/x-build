import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import cleanCSS from 'gulp-clean-css';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import args from './util/args';
import base64 from 'gulp-base64';
import rename from 'gulp-rename';

gulp.task('style', () => {
  return gulp.src(['app/css/index.sass'])
    .pipe(plumber({
      errorHandle: function () {
      }
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(base64({
      extensions: ['svg', 'png', /\.jpg#datauri$/i],
      maxImageSize: 8 * 1024, // bytes
      debug: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0', 'Firefox <= 20'],
      cascade: true,
      remove: true
    }))
    .pipe(gulp.dest('server/public/css'))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      basename: 'index',
      extname: '.min.css'
    }))
    .pipe(gulp.dest('server/public/css'))
    .pipe(gulpif(args.watch, livereload()))
})
