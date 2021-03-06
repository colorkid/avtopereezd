const gulp = require('gulp');
      pug  = require('gulp-pug');
      sass = require('gulp-sass');
      csso = require('gulp-csso');
      autoprefixer = require('gulp-autoprefixer');
      sourcemaps = require('gulp-sourcemaps');
      notify = require("gulp-notify");
      concat = require('gulp-concat');
      plumber = require('gulp-plumber');
      tinypng = require('gulp-tinypng-compress');
      svgmin = require('gulp-svgmin');
      browserSync = require('browser-sync').create();
 
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: 'docs'
        },
        browser: 'chrome'
    });
    browserSync.watch('dist', browserSync.reload)
});

gulp.task('svg', function () {
  return gulp.src('src/**/*.svg')
  .pipe(svgmin())
  .pipe(gulp.dest('docs/images'));
});

gulp.task('img', function () {
  gulp.src('src/**/*.{png,jpg,jpeg,gif}')
  .pipe(tinypng({key: 'bO_kbCYOYQPfNw8RyV2YW-HEMLCkCm52'}))
  .pipe(gulp.dest('docs/images'));
});

gulp.task('vendor', function() {  
  return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/vue/dist/vue.min.js', 'node_modules/jquery-form-styler/dist/jquery.formstyler.min.js', 'src/**/*.js'])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('docs/')).pipe(browserSync.reload({
    stream:true
  }));
});

gulp.task('pug', function () {
	return gulp.src('src/pages/landings/*.pug')
	.pipe(plumber())
  	.pipe(pug({
    	pretty:true
  	}))
  	.pipe(gulp.dest('docs'))
  	.on('end',browserSync.reload);
});

gulp.task('fonts', function() { 
    gulp.src('src/pages/fonts/**/*.{eot,svg,ttf,woff,woff2}') 
        .pipe(gulp.dest('./docs/fonts/')); 
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
  	.pipe(gulp.dest('docs'))
  	.pipe(browserSync.reload({
  		stream:true
  	}));
});

gulp.task('audiore', function(){
   gulp.src('src/components/reviews/*.mp3')
      .pipe(gulp.dest('docs')); 
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.pug', gulp.series('pug'));
	gulp.watch('src/**/*.scss', gulp.series('sass'));
	gulp.watch('src/**/*.js', gulp.series('vendor'));
  gulp.watch('/src/components/reviews/*.mp3', gulp.series('audiore'));
});

gulp.task('start', gulp.series(
	gulp.parallel('pug', 'sass', 'vendor'),
	gulp.parallel('watch', 'serve', 'img', 'svg', 'fonts', 'audiore')
));