const gulp = require('gulp');
const config = require('../gulp.config');
const rename = require('gulp-rename');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('rollup-plugin-babel');
const commonJs = require('rollup-plugin-commonjs');
const rollupIncludePaths = require('rollup-plugin-includepaths');
const resolveNodeModules = require('rollup-plugin-node-resolve');

const includePathOptions = {
    include: {},
    paths: config.scripts.src,
    external: [],
    extensions: ['.js']
};

/**
 * Use rollup with gulp making it compatible with streams.
 * babel config in .babelrc in root folder.
 */
const scripts = function () {
    return rollup({
        input: config.src + config.scripts.entryPoint,
        format: 'iife',
        sourcemap: true,
        plugins: [
            babel({
                exclude: 'node_modules/**',
            }),
            rollupIncludePaths(includePathOptions),
            resolveNodeModules(),
            commonJs()
        ]
    })
        // point to the entry file.
        .pipe(source(config.scripts.entryPoint, config.src))
        // we need to buffer the output, since many gulp plugins don't support streams.
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        // some transformations like uglify, rename, etc.
        .pipe(rename(function (path) {
            path.dirname = '';
            // path.basename = path.basename.slice(0, -3);
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.scripts.dest));
};

// Task names (alias)
gulp.task('scripts', scripts);
gulp.task('js', scripts);

module.exports = scripts;