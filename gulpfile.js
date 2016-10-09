var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var less = require('gulp-less');

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('less', function () {
    return gulp.src('assets/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(bs.reload({stream:true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("assets/less/*.less", ['less']);
    gulp.watch("*.html").on('change', bs.reload);
});