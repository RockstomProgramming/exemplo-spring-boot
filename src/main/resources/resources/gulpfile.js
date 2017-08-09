var gulp = require('gulp');
var concat = require('gulp-concat');
var serve = require('gulp-webserver');

var scriptsDep = [
  'bower_components/angular/angular.min.js',
  'bower_components/angular-route/angular-route.min.js'
];

var dest = '../public';

gulp.task('scripts', function() {
  return gulp.src('./sources/js/**')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(dest + '/js'));
});

gulp.task('scripts-dev', function() {
  return gulp.src(scriptsDep)
    .pipe(concat('scripts-dev.js'))
    .pipe(gulp.dest(dest + '/js'));
});

gulp.task('default', function() {
    gulp.start('build');
    gulp.watch('./sources/**', ['build']);
    //gulp.start('serve');
});

gulp.task('build', ['scripts', 'scripts-dev', 'copyViews']);

gulp.task('serve', function() {
  gulp.src(dest)
    .pipe(serve({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('copyViews', function() {
   gulp.src('./sources/templates/**').pipe(gulp.dest(dest + '/templates'));
   gulp.src('./sources/*.html').pipe(gulp.dest(dest));
});
