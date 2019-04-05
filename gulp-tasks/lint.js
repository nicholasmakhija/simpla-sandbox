const gulp = require('gulp');
const config = require('../gulp.config');
const eslint = require('gulp-eslint');

/**
 * Linting done by eslint.
 * rules: http://eslint.org/docs/rules/
 * settings: found in .eslintrc in root folder
 */
const lint = function () {
    return gulp.src(config.scripts.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};

// Task names (alias)
gulp.task('lint', lint);

module.exports = lint;
