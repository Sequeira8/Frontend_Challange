const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();


// Sass Task
function scssTask(){
  return src('styles/style.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('styles'));
}

// JavaScript Task
function jsTask(){
  return src('js/script.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }    
  });
  cb();
}


function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Default Gulp Task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);

// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['styles/*.scss', 'js/*.js'], series(scssTask, jsTask, browsersyncReload));
}

