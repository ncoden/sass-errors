var gulp = require('gulp');
var sassdoc = require('sassdoc');

var paths = {
  scss: {
    src: 'scss/**/*.scss'
  },
  docs: {
    dest: 'docs'
  }
};

gulp.task('default', ['docs']);

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
