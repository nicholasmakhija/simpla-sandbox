const gulp = require('gulp');
const config = require('../gulp.config');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const { stream } = require('./browser-sync');

/**
 * SASS compiled using gulp sass.
 * Source maps rendered by gulp source maps.
 */
const styles = function () {
    let processors = [
        autoprefixer({browsers: ['last 2 version']})
    ];
    
    return gulp.src(config.styles.src)
        .pipe(sourcemaps.init())
        // .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.styles.dest))
        .pipe(stream());
        
};

// Task names (alias)
gulp.task('styles', styles);
gulp.task('css', styles);

module.exports = styles;