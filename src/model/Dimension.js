if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('model/Dimension',[], function() {

  var Dimension = function(name) {
    this._name = name;
  }

  Dimension.prototype.getName = function() {
    return this._name;
  }

  return Dimension;

});

