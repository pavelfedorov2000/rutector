'use strict';

var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    cleanCSS     = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename       = require('gulp-rename'),
    //rigger       = require('gulp-rigger'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    htmlmin      = require('gulp-htmlmin');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer([
            'last 10 versions'
            ], {
                cascade: true
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
    return gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('vendors', function() {
    return gulp.src('src/vendors/**/*')
        .pipe(gulp.dest('dist/vendors'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('icons', function() {
    return gulp.src('src/icons/**/*')
        .pipe(gulp.dest('dist/icons'));
});

gulp.task('logos', function() {
    return gulp.src('src/logo/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/logo'));
});

gulp.task('images', function() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'css', 'vendors', 'scripts', 'fonts', 'icons', 'logos', 'images'));