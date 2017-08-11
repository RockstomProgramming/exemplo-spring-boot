var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var pump = require('pump');
var runSequence = require('run-sequence');

const sourcesDev = require('./dependencies.json');
const PATH_DEST = '../public';
const SCRIPTS = 'scripts.js';
const SCRIPTS_MIN = 'scripts.min.js';
const SCRIPTS_DEV = 'scripts-dev.min.js';
const SCRIPTS_ALL = 'scripts-all.min.js';

gulp.task('scripts', function() {
	return gulp.src('./sources/js/**')
		.pipe(concat(SCRIPTS))
		.pipe(gulp.dest(PATH_DEST + '/js'));
});

gulp.task('scripts-dev', function() {
 	return gulp.src(sourcesDev)
        .pipe(concat(SCRIPTS_DEV))
        .pipe(gulp.dest(PATH_DEST + '/js'));
});

gulp.task('copyViews', function() {
	gulp.src('./sources/templates/**')
		.pipe(gulp.dest(PATH_DEST + '/templates'));
	
	gulp.src('./sources/*.html')
		.pipe(gulp.dest(PATH_DEST));
});

gulp.task('scripts-compress', function () {
	gulp.src(PATH_DEST + '/js/' + SCRIPTS)
		.pipe(uglify())
		.pipe(rename({suffix : '.min'}))
		.pipe(gulp.dest(PATH_DEST + '/js'));
});

gulp.task('scripts-concat', function() {
return gulp.src(['../public/js/scripts-dev.min.js', '../public/js/scripts.min.js'])
	.pipe(concat(SCRIPTS_ALL))
	.pipe(gulp.dest(PATH_DEST + '/js'));
});

/*gulp.task('sass', function () {
	return gulp.src(paths.scssDir)
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest(paths.cssDir));
});*/

gulp.task('default', function() {
	gulp.start('build');
	gulp.watch('./sources/**', ['build']);
});

gulp.task('build', ['scripts', 'scripts-dev', 'copyViews']);

gulp.task('build-compress', function() {
	runSequence('build', 'scripts-compress');
});

