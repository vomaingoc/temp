'use strict';

var gulp = require('gulp');
var scss = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
//
// gulp.task('default', function() {
//    place code for your default task here
// });
var scssFiles = 'assets/scss/*.scss',
    cssDest = 'assets/css';


gulp.task('scss', function() {
  return gulp.src(scssFiles) // cấu hình gulp địa chỉ của tập tin nguồn scss
    .pipe(scss.sync().on('error', scss.logError)) // chuyển tập tin nguồn scss thành tập tin css
    .pipe(gulp.dest(cssDest)) // địa chỉ tập tin css sẽ được lưu lại
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/*.scss', ['scss']);
  // Other watchers
})
