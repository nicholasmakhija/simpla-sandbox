const gulp = require('gulp');
const build = require('./gulp-tasks/build');
const watch = require('./gulp-tasks/watch');
const { serve } = require('./gulp-tasks/browser-sync');

// Tasks:
gulp.task('default', () => {
    console.log('NOTE: no tasks attached to gulp default');
});

gulp.task('build', build);
gulp.task('serve', gulp.series(build, serve, watch));


