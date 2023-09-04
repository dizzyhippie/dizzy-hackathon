"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");

gulp.task("watch", function () {
  gulp.watch("src/assets/scss/**/*.scss", buildStyles);
});

function buildStyles() {
  return gulp
    .src("./src/assets/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename("App.scss"))
    .pipe(gulp.dest("src"));
}

exports.buildStyles = buildStyles;
