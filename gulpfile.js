var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('default',function(){

});

gulp.task('jade',function(){
  gulp.src('jade/*.jade')
    .pipe(jade({pretty: false}))
    .pipe(gulp.dest('./'));
});

gulp.task('css',function(){
  gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(concat('global.css'))
    .pipe(gulp.dest('css/'));
})

gulp.watch('scss/*.scss',['css']);
gulp.watch('jade/*.jade',['jade']);