
var gulp = require('gulp');

var merge = require('merge2');
var concat = require('gulp-concat');

var templateCache = require('gulp-angular-templatecache');

var ts = require('gulp-typescript');
var tsp = ts.createProject('tsconfig.json');


gulp.task('default', function() {

    var templates = gulp.src('src/**/*.html')
        .pipe(templateCache('templates.js', { standalone: true }))
        .pipe(gulp.dest('web/js'));

    var tsOut = merge(
        gulp.src('src/**/*module.ts'),
        gulp.src(['src/**/*.ts', '!src/**/*module.ts'])
    ).pipe(tsp());
    return tsOut
        .pipe(concat('main.js'))
        .pipe(gulp.dest('web/js'));


});

//gulp.task('default', function () {
//    return gulp.src('src/**/*.html')
//        .pipe(templateCache())
//        .pipe(gulp.dest('web'));
//});