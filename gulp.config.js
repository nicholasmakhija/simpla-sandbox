const src = './src/';
const dest = './dist/';

module.exports = {
    src: './src/',
    dest: './dist/',
    // --------------------------- browser-sync
    browserSync: {
        opts: {
            port: 4019,
            // server: dest
            server: {
                baseDir: dest,
                routes: {
                    '/bower_components': 'bower_components'
                }
            }
        }
    },
    // --------------------------- sass
    styles: {
        opts: {}, // sass options
        src: [
            src + '**/*.scss',
            src + '*.scss'
        ],
        dest: dest + 'css/',
    },
    // --------------------------- scripts
    scripts: {
        src: [
            src + '**/*.js',
            src + '*.js'
        ],
        dest: dest + 'js/',
        entryPoint: 'app.js'
    },
    // --------------------------- assets
    assets: {
        src: [
            src + '**/*.gif',
            src + '**/*.jpeg',
            src + '**/*.jpg',
            src + '**/*.png',
            src + '**/*.svg',
            src + '**/*.eot',
            src + '**/*.ttf',
            src + '**/*.woff',
            src + '**/*.woff2',
            src + '**/*.mp4',
            src + '**/*.ogg',
            src + '**/*.webm',
            src + '**/*.json'
        ],
        dest: dest
    },
    // --------------------------- handlebars
    handlebars: {
        src: [
            src + '**/*.hbs',
            src + '*.hbs'
        ]
    },
    components: {
        src: src + '**/'
    },
    templates: {
        src: src + 'templates/*.hbs',
        dest: dest
    },
};
