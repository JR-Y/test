var gulp = require('gulp'),
        watch = require('gulp-watch'),
        browserSync = require('browser-sync').create();



gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
    });


    watch('./index.html', function () {
        browserSync.reload();
    });

    watch('./assets/styles/**/*.css', function () {
        gulp.start('sccInject');
        
                     
    });

});

gulp.task('sccInject', ['styles'], function(){
   return gulp.src('./temp/styles/styles.css')
           .pipe(browserSync.stream());
});