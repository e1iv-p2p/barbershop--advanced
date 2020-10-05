const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const postcss = require('gulp-postcss')
const del = require('del')
const autoprefixer = require('autoprefixer')
const sync = require('browser-sync').create()


function scss() {
  return src('sass/style.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(dest('sources/css'))
}

function clear() {
  return del('sources/css/style.css')
}

function serve() {
  sync.init({
    server: "sources/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  })

  watch('**.html').on('change', sync.reload)
  watch('sass/**.{scss,sass}', series(scss)).on('change', sync.reload)
  watch('sass/blocks/**.{scss,sass}', series(scss)).on('change', sync.reload);
}

exports.build = series(clear, scss)
exports.serve = series(clear, scss, serve)
exports.clear = clear;
