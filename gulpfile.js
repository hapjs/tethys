var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('uglify', function(){
    return gulp.src(['tethys.js'])
        .pipe(uglify())
        .pipe(rename('tethys.min.js'))
        .pipe(gulp.dest('./'));
});