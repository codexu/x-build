import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser', (cb) => {
  if (!args.watch) return cb();
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/**/*.jade', ['pages']);
  gulp.watch('app/**/*.sass', ['style']);
  gulp.watch('app/images/**/*', ['images']);
});
