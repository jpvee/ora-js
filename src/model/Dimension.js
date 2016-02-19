if (typeof define !== 'function') {var define = require('amdefine')(module) }

define(function() {

  var my = {}

  var Dimension = function(name) {
    my.name = name;
  }

  Dimension.prototype.getName = function() {
    return my.name;
  }

  return Dimension;

});

