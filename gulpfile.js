var gulp = require('gulp');
var del = require('del');
var fs = require('fs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var browserify = require('browserify');
var babelify = require('babelify');
var lint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cache = require('gulp-cache');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var src = {
  html:     'src/*.html',
  fonts:    'src/assets/fonts/*',
  styles:   'src/assets/styles/**/*.scss',
  images:   'src/assets/images/**/*',
  scripts:  'src/scripts/**/*.js',
  main:     'src/scripts/app.js'
};

var dest = {
  html: 'dist',
  font: 'dist/assets/fonts',
  img:  'dist/assets/images',
  css:  'dist/assets/styles',
  js:   'dist',
  main: 'dist/app.js'
};

function swallowError(error) {
  console.log(error.message.toString());
  this.emit('end');
}

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('build-images', function() {
	gulp.src(src.images)
		.pipe(gulp.dest(dest.img));
});

// 有壓縮圖檔
gulp.task('dist-images', function() {
  return gulp.src(src.images)
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest(dest.img));
});

gulp.task('build-fonts', function() {
	gulp.src(src.fonts)
		.pipe(gulp.dest(dest.font));
});

gulp.task('build-styles', function() {
  return gulp.src(src.styles)
    .pipe(sass())
    .on('error', swallowError)
    .pipe(gulp.dest(dest.css))
    .pipe(reload({stream: true}));
});

gulp.task('lint-scripts', function () {
	var patterns = [
		src.scripts,
		'!node_modules/**',
		'!bower_componments/**'
	];

	return gulp.src(patterns)
		.pipe(lint())
		.pipe(lint.format())
		.pipe(lint.failAfterError());
});

gulp.task('build-scripts', ['lint-scripts'], function() {
	return browserify({debug: true})
		.transform(babelify)
		.require(src.main, {entry: true})
		.bundle()
		.on('error', swallowError)
		.pipe(fs.createWriteStream(dest.main));
});

gulp.task('build-html', function() {
  return gulp.src(src.html)
		.pipe(gulp.dest(dest.html));
});

gulp.task('build', ['clean'], function() {
  gulp.start(
    'build-images', 
    'build-fonts',
    'build-styles',
    'build-scripts',
    'build-html'
  );
});

gulp.task('watch', function() {
  // Watch fonts files
  gulp.watch(src.fonts, ['build-assets']);
  
  // Watch image files  
  gulp.watch(src.images, ['build-images']);

  // Watch .scss files
  gulp.watch(src.styles, ['build-styles']);
  
  // Watch JavaScript files
  gulp.watch(src.scripts, ['build-scripts']);
  
  // Watch index.html
  gulp.watch(src.html, ['build-html']);
});

gulp.task('serve', ['build'], function() {
  browserSync({
    server: 'dist'
  });
  
  // Watch fonts files
  gulp.watch(src.fonts, ['build-assets']).on('change', reload);
  
  // Watch image files  
  gulp.watch(src.images, ['build-images']).on('change', reload);

  // Watch .scss files
  gulp.watch(src.styles, ['build-styles']);
  
  // Watch JavaScript files
  gulp.watch(src.scripts, ['build-scripts']);
  gulp.watch(dest.main).on('change', reload);
  
  // Watch index.html
  gulp.watch(src.html, ['build-html']).on('change', reload);
});


gulp.task('default', ['serve']);

