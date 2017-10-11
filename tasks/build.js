import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean', 'images', 'style', 'pages', 'scripts', ['browser', 'serve']));
