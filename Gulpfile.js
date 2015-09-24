var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload');


gulp.task('sass', function() {
	gulp.src('./public/css/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./public/css'))
		.pipe(livereload());
});

gulp.task('reload', function() {
	gulp.src('./public/index.html')
		.pipe(livereload());
});

gulp.task('default', function() {
	gulp.watch('./public/css/*.scss', ['sass']);
	gulp.watch('./public.index.html', ['reload']);
});