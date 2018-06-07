const gulp = require('gulp');
      pug  = require('gulp-pug');
      sass = require('gulp-sass');
      csso = require('gulp-csso');
      autoprefixer = require('gulp-autoprefixer');
      sourcemaps = require('gulp-sourcemaps');
      notify = require("gulp-notify");
      plumber = require('gulp-plumber');
      browserSync = require('browser-sync').create();
 
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: 'build'
        },
        browser: 'chrome'
    });
});

gulp.task('pug', function () {
	return gulp.src('src/pages/landings/*.pug')
	.pipe(plumber())
  	.pipe(pug({
    	pretty:true
  	}))
  	.pipe(gulp.dest('build'))
  	.on('end',browserSync.reload);
});

gulp.task('sass', function () {
  	return gulp.src('src/pages/scss/global.scss')
  	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(sass({}))
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
     .on("error", notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error running something"
    }))
    .pipe(csso())
	.pipe(sourcemaps.write())
  	.pipe(gulp.dest('build'))
  	.pipe(browserSync.reload({
  		stream:true
  	}));
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.pug', gulp.series('pug'));
	gulp.watch('src/**/*.scss', gulp.series('sass'));
});

gulp.task('start', gulp.series(
	gulp.parallel('pug', 'sass'),
	gulp.parallel('watch', 'serve')
));