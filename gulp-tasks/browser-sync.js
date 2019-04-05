const config = require('../gulp.config');
const browserSync = require('browser-sync').create();

/**
 * Stream (used for style injection)
 */
const stream = browserSync.stream;

/**
 * Initialize static server
 */
const serve = function (done) {
    browserSync.init(config.browserSync.opts);
    done();
};

/**
 * Reload server
 */
const reload = function (done) {
    browserSync.reload();
    done();
};

module.exports = {
    stream,
    serve,
    reload
};
