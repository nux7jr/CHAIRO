const { notify } = require("browser-sync");
const { dest, src, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browsersync = require("browser-sync").create();

// Sass Task

function scssTask() {
  return src("scss/**/*.scss")
    .pipe(sass())
    .pipe(dest("css"));
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
    notify: false,
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("*.html", browsersyncReload);
  watch(
    ["scss/**/*.scss"],
    series(scssTask, browsersyncReload)
  );
}

// Default Gulp task
exports.default = series(scssTask, browsersyncServe, watchTask);
