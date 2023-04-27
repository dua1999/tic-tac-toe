const {src, dest} = require('gulp');
const concat = require('gulp-concat')

gulp.task('js', function(){
    return gulp.src('js/*.js')
    .pipe(concat('min.js'))
    .pipe(gulp.dest('dist'))
})