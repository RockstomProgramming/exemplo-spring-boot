const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const pump = require('pump');
const runSequence = require('run-sequence');

const sourcesDev = require('./scripts.json');
const sources = require('./sources.json');

const PATH_DEST = '../public';
const SCRIPTS = 'scripts.js';
const SCRIPTS_MIN = 'scripts.min.js';
const SCRIPTS_DEV = 'scripts-dev.min.js';
const SCRIPTS_ALL = 'scripts-all.min.js';


gulp.task('scripts', function() {
	return gulp.src(sources.jsDir)
		.pipe(concat(SCRIPTS))
		.pipe(gulp.dest(PATH_DEST + '/js'));
});

gulp.task('scripts-dev', function() {
 	return gulp.src(sourcesDev)
        .pipe(concat(SCRIPTS_DEV))
        .pipe(gulp.dest(PATH_DEST + '/js'));
});

gulp.task('copyViews', function() {
	gulp.src(sources.templatesDir)
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
return gulp.src(sources.concatJs)
	.pipe(concat(SCRIPTS_ALL))
	.pipe(gulp.dest(PATH_DEST + '/js'));
});

gulp.task('sass', function () {
	return gulp.src(sources.scssDir)
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest(PATH_DEST + '/css'));
});

gulp.task('default', function() {
	gulp.start('build');
	gulp.watch('./sources/**', ['build']);
});

gulp.task('build', ['scripts', 'scripts-dev', 'copyViews']);

gulp.task('build-compress', function() {
	runSequence('build', 'scripts-compress');
});

