var gulp = require('gulp'); 
var path = require('path');
var jshint = require('gulp-jshint');
var fs = require('fs');
var jsdoc = require('gulp-jsdoc');

gulp.task('build', function () {
    return gulp.src('src/js/*.js')
    		.pipe(jshint())
    		.pipe(jshint.reporter());
});

gulp.task('doc', ["build"], function() {

    var config = require('./doc_template/js/jsdoc.conf.json');

    var infos = {
        plugins: config.plugins
    }

    var templates = config.templates;
    templates.path = 'doc_template/js';

    return gulp.src("src/js/*.js")
      .pipe(jsdoc.parser(infos))
      .pipe(jsdoc.generator('dist/doc/js', templates));

});

gulp.task('default', ['build', 'doc']);
