require('events').EventEmitter.defaultMaxListeners = Infinity;
// add Modulos
var gulp          = require('gulp'),
    jade          = require('gulp-jade'),
    autoPrefixer  = require('gulp-autoprefixer'),
    plumber       = require('gulp-plumber'),
    sass          = require('gulp-sass'),
    uglify        = require('gulp-uglify'),
    imageIn       = require('Gulp-imagemin'),
    browserSync   = require('browser-sync').create();

// Task Fonts Bootstrap
gulp.task('fonts', function() {
    gulp.src('_assents/fonts/*.*')
    .pipe(gulp.dest('_build/fonts'));
});

// Task imagen
gulp.task('imagen', function(){
  gulp.src('_assents/img/*.*')
  .pipe(imageIn())
  .pipe(gulp.dest('_build/img'))

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    gulp.src("_assents/css/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(plumber.stop())
    .pipe(gulp.dest("_build/css"))
    .pipe(browserSync.stream());
});

// Task Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "_build"
    });

});

// Task Jade
gulp.task('jade', function(){
  gulp.src('jadeFiles/*.jade')
  .pipe(plumber())
  .pipe(jade({
    pretty:true
  }))
  .pipe(plumber.stop())
  .pipe(gulp.dest('_build'))

});

// Task Watch
gulp.task('watch', function(){

  gulp.watch("_assents/css/*.scss", ['sass']);
  gulp.watch("jadeFiles/*.jade", ['jade']).on('change', browserSync.reload);
  gulp.watch("_assents/js/*.js", ['js']).on('change', browserSync.reload);

})

// Task JS
gulp.task('js', function(){

  gulp.src('_assents/js/*.js')
  .pipe(gulp.dest('_build/js'))

});

// Task default
gulp.task('default', ['serve', 'jade', 'watch', 'js', 'fonts', 'imagen']);
