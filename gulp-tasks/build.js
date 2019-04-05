const gulp = require('gulp');
const clean = require('./clean');
const styles = require('./styles');
const lint = require('./lint');
const scripts = require('./scripts');
const handlebars = require('./handlebars');
const assets = require('./assets');

/**
 * Build tasks
 */
const build = gulp.series(
    clean, 
    gulp.parallel(styles, gulp.series(lint, scripts), handlebars, assets)
);

module.exports = build;
