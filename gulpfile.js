var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    stream = browserSync.stream,
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream'),
    runSync = require('run-sequence'),
    pump = require('pump');

var config = {
    paths: {
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.css',
            './src/css/**/*.css'
        ],
        less: ['./src/less/**/*.less'],
        js: ['./src/**/*.js'],
        jsx: ['./src/**/*.jsx'],
        html: ['./src/**/*.html'],
        app: './src/app.js',
        images: './src/images/**/*.*',
        fonts: [
            'node_modules/bootstrap/dist/fonts/*.*',
            './src/fonts/**/*.*'
        ]
    },
    dest: {
        style: 'styles/style.css',
        dist: 'dist/',
        less: 'src/css',
        images: 'dist/images',
        fonts: 'dist/fonts'
    }

};
gulp
    .task('clean', () => {
        console.log('cleaning dist directory...')
        del([config.dest.dist]).then((paths) => { console.log('Deleted files and folders:\n', paths.join('\n')); })
    })

.task('server', () => {
    browserSync.init({ server: { baseDir: 'dist/' } });

})

.task('html', () => {
    console.log("copying html files...");
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.dest.dist))
        .pipe(stream());
})

.task('images', () => {
        console.log("copying image files...");
        return gulp.src(config.paths.images)
            .pipe(gulp.dest(config.dest.images))
            .pipe(stream());
    })
    .task('fonts', () => {
        console.log("copying font files...");
        return gulp.src(config.paths.fonts)
            .pipe(gulp.dest(config.dest.fonts))
            .pipe(stream());
    })
    .task('less', () => {
        console.log('copying less files...');
        return gulp.src(config.paths.less)
            .pipe(less())
            .pipe(gulp.dest(config.dest.less))
            .pipe(stream());

    })

.task('css', ['less'], () => {
    console.log('merging css files...');
    return gulp.src(config.paths.css)
        .pipe(concat(config.dest.style))
        .pipe(gulp.dest(config.dest.dist))
        .pipe(stream());
})

.task('css:min', ['less'], () => {
        console.log('merging css files...');
        return gulp.src(config.paths.css)
            .pipe(concat(config.dest.style))
            .pipe(cssmin())
            .pipe(gulp.dest(config.dest.dist))
            .pipe(stream());
    })
    .task('js', () => {
        console.log('processing js files...');
        return gulp.src(config.paths.js)
            .pipe(webpack(require('./webpack.config.js')))
            .pipe(gulp.dest(config.dest.dist))
            .pipe(stream());

    })

.task('js:min', function() {
    console.log('processing js files and minifying...')
    return gulp.src(config.paths.js)
        .pipe(webpack(require('./webpack.config.min.js')))
        .pipe(gulp.dest(config.dest.dist))
        .pipe(stream());
})

.task('watch', () => {
        return gulp.watch(
            [config.paths.html, config.paths.js, config.paths.css, config.paths.images, config.paths.less, config.paths.jsx], ['html', 'images', 'css:min', 'js', browserSync.reload]
        );
    })
    /**
     * Compiling resources and serving application
     */

.task('start', ['html', 'fonts', 'images', 'css:min', 'js', 'server', 'watch'])
    .task('bundle', ['html', 'fonts', 'images', 'css', 'js'])
    .task('bundle:min', ['html', 'fonts', 'images', 'css:min', 'js:min'])

.task('dev-server', () => {
        runSync('clean', 'start')
    })
    .task('default', ['start']);
