var gulp = require('gulp'); 
const minify = require('gulp-minify');
 
gulp.task('default', function() {
  gulp.src(['scripts/*.js', 'scripts/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('scripts'))
});