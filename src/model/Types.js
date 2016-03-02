if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('model/Types', ['model/TypeDate', 'model/TypeTime', 'model/TypeEnum'], function() {

  var TypeDate = require('model/TypeDate');
  var TypeTime = require('model/TypeTime');
  var TypeEnum = require('model/TypeEnum');

  var Types = function() {
  };

  Types.getType = function(type) {
    switch (type) {
      case "time" : return TypeTime;
      case "date" : return TypeDate;
      case "enum" : return TypeEnum;
      default: throw new RangeError("Only 'time', 'date' or 'enum' are allowed as parameters.");
    }
  };

  return Types;

});

