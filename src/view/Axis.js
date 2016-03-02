if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/Axis', [], function() {


  var Axis = function(attr) {

    var Types = require("model/Types");

    var my = {};
    my.type = Types.getType(attr.type);
    my.start = attr.start;
    my.end = attr.end;
    my.entries = my.type.getEntries(attr);
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

