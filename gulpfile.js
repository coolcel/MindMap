var fs = require("fs");
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync').create();
var history = require('connect-history-api-fallback');
var reload      = browserSync.reload;
var webpack = require('gulp-webpack');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        port: 5777,
        server: {
            baseDir: "."
        }
    });

  gulp.watch("src/javascript/**", ['webpack']);
  gulp.watch("src/style/sass/*.scss", ['sass']);
  gulp.watch("*.html").on('change', reload);
});

gulp.task("webpack", function() {
    return gulp.src('scr/javascript/app.jsx')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.reload({stream:true}));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/style/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.reload({stream:true}));
});
gulp.task('default', ['sass','webpack', 'browser-sync']);
