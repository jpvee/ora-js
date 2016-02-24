if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/OraTable', [], function() {

  var my = {};

  var OraTable = function(width, height) {
    my.width = width;
    my.height = height;
  }

  OraTable.prototype.getWidth = function() {
    return my.width;
  }

  OraTable.prototype.getHeight = function() {
    return my.height;
  }

  return OraTable;

});

