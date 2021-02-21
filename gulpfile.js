//Create variables for gulp and sass
var gulp = require('gulp')
var sass = require('gulp-sass')

//set the path to the scss files
var paths = {
  scss: './sass/*.scss'
};

//Create the task to compile the scss into a css file
gulp.task('sass', async function() {
  gulp.src('styles/style.scss')
  .pipe(sass({
    includePaths: ['scss']
  }))
  .pipe(gulp.dest('styles'));
});

//Task to keeo on watching the scss files. Modifications will automaically change the css file
gulp.task('watch', gulp.series('sass'), function() {
  gulp.watch(["styles/*.scss","styles/base/*.scss","styles/sections/*.scss","styles/style/*.scss"],['sass']);
});
