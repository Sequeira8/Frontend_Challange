//Create variables for gulp and sass
var gulp = require('gulp')
var sass = require('gulp-sass')

//Create the task to compile the scss into a css file
gulp.task('sass', async function() {
  gulp.src('styles/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('styles'));
});

//Task to keep on watching the scss files. Modifications will automaically change the css file
gulp.task('watch', function() {
  gulp.watch('styles/*.scss', gulp.series('sass'));
});