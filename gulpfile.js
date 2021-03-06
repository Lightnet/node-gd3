//https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js
//https://github.com/AveVlad/gulp-connect/pull/92

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
//var io = require('socket.io')

var outputDir = 'dist';
var jsSources = ['src/godot_client.js','src/godot_js.js'];

//===============================================
// GODOT Engine
//===============================================

var godotPath = "C:/godot3";

var godot_html = [
  godotPath + "/bin/.javascript_zip/godot.js",
  godotPath + "/bin/.javascript_zip/godot.wasm",
];

var godotModuleDir = godotPath + '/modules';

//===============================================
// 
//===============================================

gulp.task('connect', function() {
  var app = connect.server({
    root: './dist',
    livereload: true
  });
  var io = require('socket.io')(app.server);
  io.on('connection', function(socket) {
    // do stuff
    console.log("connect client!");
  });
  
});

gulp.task('js', function() {
  gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload())
});

gulp.task('godot3_js', function() {
  gulp.src(jsSources)
  //.pipe(uglify())
  //.pipe(concat('script.js'))
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload())
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest(outputDir))
});

gulp.task('modules', function() {
  gulp.src(['modules/**/*.h','modules/**/*.cpp','modules/**/*.py','modules/**/SCsub'])
  .pipe(gulp.dest(godotModuleDir))
});

gulp.task('css', function() {
  gulp.src('src/index.css')
  .pipe(gulp.dest(outputDir))
});

gulp.task('watch', function() {
  //gulp.watch('styles/main.scss', ['sass']);
  //gulp.watch(jsSources, ['godot3_js']);
  gulp.watch(['modules/**/*.h','modules/**/*.cpp','modules/**/*.py','modules/**/SCsub'], ['modules']);
  gulp.watch('src/index.html', ['copy']);
  gulp.watch('src/index.css', ['css']);
});

gulp.task('copy_godot_javascript', function() {
  gulp.src(godot_html)
  .pipe(gulp.dest(outputDir));

  gulp.src('./assets/html_debug/godot_modules.html')
  .pipe(gulp.dest(outputDir));
});

// create a default task and just log a message
gulp.task('default', ['copy_godot_javascript','godot3_js','copy','css','connect','watch'] , function() {
  return gutil.log('Gulp is running!');
});