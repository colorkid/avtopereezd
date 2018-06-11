const gulp = require('gulp');
      pug  = require('gulp-pug');
      sass = require('gulp-sass');
      csso = require('gulp-csso');
      autoprefixer = require('gulp-autoprefixer');
      sourcemaps = require('gulp-sourcemaps');
      notify = require("gulp-notify");
      concat = require('gulp-concat');
      plumber = require('gulp-plumber');
      browserSync = require('browser-sync').create();
 
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: 'build'
        },
        browser: 'chrome'
    });
    browserSync.watch('dist', browserSync.reload)
});

gulp.task('vendor', function() {  
    //return gulp.src('src/**/*.js')
    return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/vue/dist/vue.min.js', 'src/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('build/')).pipe(browserSync.reload({
      stream:true
    }));
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
	gulp.watch('src/**/*.js', gulp.series('vendor'));
});

gulp.task('start', gulp.series(
	gulp.parallel('pug', 'sass', 'vendor'),
	gulp.parallel('watch', 'serve')
));