const { src, 
      dest, 
      watch, 
      parallel,
      series}      = require("gulp");
const scss         = require("gulp-sass")(require("sass"));
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const del          = require('del');

// jast empty sample...
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

// function for JavaScript files that get, concat, rename js
// files and then save tham into place we need.
function scripts(){
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/swiper/swiper-bundle.js',
    'src/js/main.js',
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('src/js'))
  .pipe(browserSync.stream())
}

// function creates server for html, css and JS files
function browsersync(){
  browserSync.init({
    server: {
        baseDir: "src",
        directory: true
    }
  });
}

// worck with cass-scss preprocessor transforme scss into css, concat ans minimization files
function scssTocss() {
  return src('src/scss/style.scss')
    .pipe(scss({outputStyle: "compressed"}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
			overrideBrowserslist:['last 10 versions'],
      cascade: false,
      grid: true
		}))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}
function scssTocss1() {
  return src('src/scss/style.scss')
    .pipe(scss())
    .pipe(autoprefixer({
			overrideBrowserslist:['last 10 versions'],
      cascade: false,
      grid: true
		}))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

function images(){
  return src('src/images/**/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ]))
  .pipe(dest('dist/images'))
}

function dist(){
  return src([
    'src/css/style.min.css', 
    'src/js/main.min.js', 
    'src/**/*.html', 
    'src/fonts/**/*'
  ], {base: 'src'})
  .pipe(dest('dist'))
}

function deldist(){
  return del('dist')
}

function watching(){
  watch(['src/scss/*.scss'], scssTocss);
  watch(['src/scss/*.scss'], scssTocss1);
  watch("src/**/*.html").on('change', browserSync.reload);
  watch(['src/js/main.js'], scripts);
}

exports.dist =  series(deldist, images, dist);
exports.deldist = deldist;
exports.images = images;
exports.default = defaultTask;
exports.tocss = scssTocss;
exports.tocss1 = scssTocss1;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.default = parallel(browsersync, watching, scripts);