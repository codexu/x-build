import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages', () => {
  return gulp.src('app/**/*.jade')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch, livereload()))
})
