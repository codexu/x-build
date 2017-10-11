import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('images', () => {
  gulp.src('app/images/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }], //不要移除svg的viewbox属性
      use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
    }))
    .pipe(gulp.dest('server/public/images'))
    .pipe(gulpif(args.watch, livereload()))
})