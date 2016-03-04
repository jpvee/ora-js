if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/Axis', [], function() {


  var Axis = function(attr) {

    var Types = require("model/Types");

    this.type = Types.getType(attr.type);
    this.start = attr.start;
    this.end = attr.end;
    this.entries = this.type.getEntries(attr);
  }

  Axis.prototype.getType = function() {
    return this.type;
  }

  Axis.prototype.getEntries = function() {
    return this.entries;
  }

  return Axis;

});

