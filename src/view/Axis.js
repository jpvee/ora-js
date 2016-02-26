if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/Axis', ['model/Types'], function() {

  Types = require("model/Types");

  var my = {};

  var Axis = function(attr) {
    my.type = attr.type;
    my.start = attr.start;
    my.end = attr.end;
    my.entries = Types.getType(attr.type).getEntries();
  }

  Axis.prototype.getType = function() {
    return my.type;
  }

  Axis.prototype.getStart = function() {
    return my.start;
  }

  Axis.prototype.getEnd = function() {
    return my.end;
  }

  Axis.prototype.getEntries = function() {
    return my.entries;
  }

  return Axis;

});

