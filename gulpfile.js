var gulp = require('gulp')
var uglify = require('gulp-uglify')
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css')
var concat = require('gulp-concat')

var jsSrc = './js/src/**/*.js'
var sassSrc = './css/sass/*.scss'
var skeletonSrc = './node_modules/skeleton-css/css/*.css'

gulp.task('scripts', function() {
    return gulp.src(jsSrc)
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
})

gulp.task('styles', function() {
    gulp.src(sassSrc)
        .pipe(concat('styles.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./public/css'))
})

gulp.task('skeleton', () => {
    return gulp.src(skeletonSrc)
        .pipe(concat('skeleton.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public/css'))
})

gulp.task('automate', function() {
    gulp.watch([sassSrc, jsSrc], ['scripts', 'styles'])
})

gulp.task('default', ['scripts', 'styles', 'skeleton', 'automate'])