const gulp = require ('gulp');
const postcss = require('gulp-postcss');
const tailwind =  require('tailwindcss');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('css', function(){
    var plugins = [
        tailwind
    ]
    return gulp.src('./src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('imagemin', () => (
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
));
gulp.task('uglify', () => (
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
));

gulp.task('default', gulp.series(['css','imagemin','uglify']));

gulp.task('watch', ()=>(
    gulp.watch('./src/js/*.js',gulp.series('uglify')),
    gulp.watch('./src/img', gulp.series('imagemin')),
    gulp.watch('./src/*.css', gulp.series ('css'))
));
