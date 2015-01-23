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
