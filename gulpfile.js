var gulp = require('gulp');
var sassdoc = require('sassdoc');
var browser = require('browser-sync').create();
var port = process.env.SERVER_PORT || 3000;

var paths = {
  scss: {
    src: 'scss/**/*.scss'
  },
  docs: {
    dest: 'docs'
  }
};

gulp.task('default', ['serve', 'docs']);

// Starts a BrowerSync instance
gulp.task('serve', ['docs'], function(){
  return browser.init({server: paths.docs.dest, port: port});
});

// Build the documentation
gulp.task('docs', function () {
  return gulp.src(paths.scss.src)
    .pipe(sassdoc({
      dest: paths.docs.dest,
      display: {
        access: ['public'],
        alias: true,
        watermark: true
      },
      groups: {
        'api': 'API',
        'handler': 'Exception Handlers',
        'helper': 'Helpers',
        'alias': 'Aliases'
      }
    }));
});
