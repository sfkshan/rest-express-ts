const gulp = require("gulp");
const ts = require("gulp-typescript");
const clean = require("gulp-clean");

const srcPath = "src/**/*.ts";

const sourcemaps = require("gulp-sourcemaps");

const tsProject = ts.createProject("./tsconfig.json", { noImplicitAny: true });

gulp.task("build", function() {
  var tsResult = gulp
    .src(srcPath)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write(".", { sourceRoot: "./src", includeContent: false }))
    .pipe(gulp.dest("build/src"));

  return tsResult;
});

gulp.task("clean", function() {
  return gulp.src("build", { read: false }).pipe(clean());
});

gulp.task("watch", ["clean", "build"], function() {
  gulp.watch(srcPath, ["build"]);
});

gulp.task("default", ["watch"]);
