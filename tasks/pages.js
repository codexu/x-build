import gulp from 'gulp';
import gulpif from 'gulp-if';
import jade from 'gulp-jade';
import plumber from 'gulp-plumber';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages', () => {
  gulp.src('app/**/*.jade')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch, livereload()))
  gulp.src('app/views/*.jade')
    .pipe(plumber({
      errorHandle: function () {
      }
    }))
    .pipe(jade())
    .pipe(gulpif(args.build, gulp.dest('build')))
})