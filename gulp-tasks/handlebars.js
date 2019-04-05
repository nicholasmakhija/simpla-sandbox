const gulp = require('gulp');
const config = require('../gulp.config');
const compileHandlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const glob = require('glob');

/**
 * Handlebars templates compiled using gulp handlebars
 */
const handlebars = function () {
    let templateData;
    let options = {};

    options.batch = glob.sync(config.components.src);

    return gulp.src(config.templates.src)
        .pipe(compileHandlebars(templateData, options))
        .pipe(rename((path) => { path.extname = '.html'; }))
        .pipe(gulp.dest(config.templates.dest));
};

// Task names (alias)
gulp.task('handlebars', handlebars);
gulp.task('hbs', handlebars);

module.exports = handlebars;