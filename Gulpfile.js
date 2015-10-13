var gulp = require('gulp'),
	sass = require('gulp-sass');


gulp.task('sass', function() {
	return gulp.src('./public/css/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('html', function() {
	return gulp.src('./public/index.html');
});

gulp.task('watch', function() {
	gulp.watch('./public/css/*.scss', ['sass']);
	gulp.watch('./public.index.html', ['html']);

});

gulp.task('default', ['watch', 'sass']);