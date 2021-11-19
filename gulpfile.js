'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var pug = require('gulp-pug');
var watch = require('gulp-watch');

function sassCore() {
	return gulp.src('assets/components/**/**.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
};

function pugToHtml() {
	return gulp.src('assets/components/**/**.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('dest'));
}
exports.pugToHtml = pugToHtml;
exports.sassCore = sassCore;