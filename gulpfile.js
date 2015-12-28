var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  standard = require('gulp-standard')

/** Locais dos arquivos */
var fileJS = './src/sharete.js',
	distJS = './dist/'

gulp.task('compress', function() {
	gulp.src(fileJS)
		.pipe(uglify())
		.pipe(gulp.dest(distJS))
})

gulp.task('standard', function () {
  return gulp.src(fileJS)
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false
    }))
})

gulp.task('watch', function() {
	gulp.watch(fileJS, ['standard', 'compress-js'])
})

gulp.task('default', ['watch'])
