const gulp = require('gulp');
const util = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass');

/*--------------------------------------------------------*/

gulp.task('sass', function () {
  return gulp
    .src([
      './scss/**/*.scss',
      '!./scss/_*.scss',
      // '!./scss/_partial/*.scss'
    ])
    .pipe(
      plumber({
        errorHandler: notify.onError('sass Error\n <%= error.message %>'),
      })
    )
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('../public/assets/css/'));
});

gulp.task('watch', function (done) {
  gulp.watch('./scss/**/*.scss', gulp.task('sass'));
  done();
});

gulp.task('default', gulp.parallel('watch', 'sass'));
