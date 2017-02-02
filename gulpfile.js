var gulp = require('gulp'),
  sass = require('gulp-sass'),
  connect = require('gulp-connect'),
  pug = require('gulp-pug');
 
gulp.task('compileSass', function() {
  gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
})

gulp.task('compilePug', function() {
  gulp.src('app/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
})

gulp.task('watch', function() {
  gulp.watch(['app/**/*.scss'],['compileSass']),
  gulp.watch(['app/**/*.pug'],['compilePug']);
  gulp.watch(['*.js'],['compilePug']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist/',
    livereload: true
  });
});

gulp.task('default', ['watch', 'connect']);
