const gulp = require('gulp');
const config = require('../gulp.config');
const del = require('del');

/**
 * Delete the output folder.
 */
const clean = function () {
    return del(config.dest);
};

// Task names (alias)
gulp.task('clean', clean);

module.exports = clean;
