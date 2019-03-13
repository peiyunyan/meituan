const gulp = require('gulp');
const server = require('gulp-webserver');
const sass = require('gulp-sass');
const minCss = require('gulp-clean-css');
const aglify = require('gulp-uglify');

gulp.task('sass',function() {
    return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(minCss())
    .pipe(gulp.dest('./src/styles/css'))
})

gulp.task('watch',gulp.series('sass'));