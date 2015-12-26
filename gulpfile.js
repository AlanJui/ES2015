'use strict';

var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var del = require('del');
var browserify = require('browserify');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sourceMaps = require("gulp-sourcemaps");
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var eslint = require('gulp-eslint');

var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


var SCRIPTS_SRC = ['./src/scripts/app/*.js'];
var BUILD_DIR = './dist';

gulp.task('build-clean', () => {
	// Return the Promise from del()
	return del([BUILD_DIR]);
//^^^^^^
//This is the key here, to make sure asynchronous tasks are done!
});

gulp.task('build-assets', () => {
	gulp.src('./src/assets/images/*')
		.pipe(gulp.dest('./dist/assets/images'));

	gulp.src('./src/assets/fonts/*')
		.pipe(gulp.dest('./dist/assets/fonts'));
});

gulp.task('build-styles', () => {
	gulp.src('./src/assets/styles/**/*.scss')
		.pipe(sourceMaps.init())
		.pipe(sass({outputStyle: 'compressed'}))
		.on('error', gutil.log.bind(gutil, gutil.colors.red(
			'\n\n' +
			'***************************************\n' +
			'SASS ERROR: ' +
			'\n' +
			'***************************************\n\n'
		)))
		.pipe(autoPrefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(sourceMaps.write('./'))
		.pipe(gulp.dest('dist/assets/styles'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('lint', () => {

	var patterns = [
		'./src/scripts/**/*.{js,jsx}',
		'!node_modules/**',
		'!src/bower_componments/**'
	];

	return gulp.src(patterns)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});


gulp.task('build-scripts', ['lint'], () => {

	return browserify({
		entries: './src/scripts/app.js',
		extensions: ['.js'],
		debug: true
	})
		.transform(babelify, {
			sourceMaps: true,
			global: true,
			ignore: /.\/node_modules\//
		})
		.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourceMaps.init({loadMaps: true}))  // loads map from browserify file
		//.pipe(uglify())
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(BUILD_DIR))
		.pipe(browserSync.reload({stream: true}))
		;
});

//  Gulp + ES2015 code (using export) + Babel + Browserify
gulp.task("transpile", function () {
	return gulp.src("src/scripts/**/*.js")
		.pipe(sourceMaps.init())
		.pipe(babel({modules: "common"}))
		.pipe(concat("bundle.js"))
		.pipe(sourceMaps.write("."))
		.pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build-html', () => {
	gulp.src('./src/index.html')
		.pipe(gulp.dest(BUILD_DIR))
		.pipe(browserSync.reload({stream: true}))
	;
});

gulp.task('browserSync', (callback) => {
	browserSync({
		server: {
			baseDir: BUILD_DIR
		}
	});
	callback();
});

gulp.task('reload', () => {
	return browserSync.reload({stream: true});
});

gulp.task('watch', () => {
	gulp.watch('./src/scripts/**/*.js', ['build-scripts']);
	gulp.watch('./src/index.html', ['build-html']);
	gulp.watch('./src/assets/styles/**/*.scss', ['build-styles']);
});

gulp.task('build', (callback) => {
	runSequence(
		'build-clean',
		'build-assets',
		'build-styles',
		'build-scripts',
		'build-html',
		callback
	);
});

gulp.task('default', (callback) => {
	runSequence(
		'build',
		'browserSync',
		'watch',
		callback
	);
});

