(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// To convert to single JS file for browser: browserify src/main.js > mylib.js

// Require mod1
var mod1 = require('./mod1.js');

// Require mod2
var mod2 = require('./mod2.js');


// Export anonymous library API object.
module.exports = function(){

  return {
    mod1: mod1,
    mod2: mod2
  };

}();

},{"./mod1.js":3,"./mod2.js":4}],2:[function(require,module,exports){
// Create global object for library.
MYLIB = require('./api.js');

},{"./api.js":1}],3:[function(require,module,exports){
var mod1 = {};

mod1.hello = function(){
    console.log("hello from mod1");
  }

module.exports = mod1;

},{}],4:[function(require,module,exports){
var mod2 = {};

mod2.hello = function(){
    console.log("hello again from mod2");
  }

module.exports = mod2;

},{}]},{},[2]);
