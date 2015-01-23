// Install browserify and minify: npm install -g browserify minify
// To convert to single JS file for browser: browserify src/main.js > mylib.js
// To minify run: minify mylib.js > mylib.min.js

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
