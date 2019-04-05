const gulp = require('gulp');
const config = require('../gulp.config');

/**
 * Copy assets from input to output folder.
 * NOTE: The folder structure is maintained.
 */
const assets = function () {
    return gulp.src(config.assets.src)
        .pipe(gulp.dest(config.assets.dest));
};

// Task names (alias)
gulp.task('assets', assets);

module.exports = assets;

