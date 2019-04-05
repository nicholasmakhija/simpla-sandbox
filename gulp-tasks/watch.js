const gulp = require('gulp');
const config = require('../gulp.config');
const styles = require('./styles');
const lint = require('./lint');
const scripts = require('./scripts');
const handlebars = require('./handlebars');
const assets = require('./assets');
const { reload } = require('./browser-sync');

/**
 * Watch tasks
 */
const watch = function () {
    gulp.watch(config.styles.src, styles);
    gulp.watch(config.scripts.src, gulp.series(lint, scripts, reload));
    gulp.watch(config.handlebars.src, gulp.series(handlebars, reload));
    gulp.watch(config.assets.src, gulp.series(assets, reload));
};

module.exports = watch;
