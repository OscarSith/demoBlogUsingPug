
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

function buildHTML() {
	return gulp.src('views/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('build'));
}

gulp.task('compile', buildHTML);
gulp.task('sass', function() {
	return gulp.src('./views/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./build/css'));
});
gulp.task('watch', function() {
	var wa = gulp.watch('views/**/*.pug', ['compile']);
	gulp.watch('views/*.scss', ['sass']);

	wa.on('change', function(e) {
		console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
	});
});
gulp.task('start', ['watch']);
