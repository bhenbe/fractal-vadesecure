const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Styles task
gulp.task('styles', function() {
  gulp.src('public/assets/scss/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: 'last 2 versions',
    cascade: false
  }))
  .pipe(gulp.dest('./public/assets/css/'))
});

// Watch task
gulp.task('default', ['styles'], function() {
  gulp.watch('public/assets/scss/*.scss',['styles']);
});