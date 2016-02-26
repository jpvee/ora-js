if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('model/Types', ['model/DateType'], function() {

  var DateType = require('model/DateType');

  var Types = function() {
  };

  Types.TimeType = function() {
  };

  Types.TimeType.getEntries = function(attr) {

  };

  Types.EnumType = function() {
  };

  Types.EnumType.getEntries = function(attr) {

  };

  Types.getType = function(type) {
    switch (type) {
      case "time" : return Types.TimeType;
      case "date" : return DateType;
      case "enum" : return Types.EnumType;
      default: throw new RangeError("Only 'time', 'date' or 'enum' are allowed as parameters.");
    }
  };

  return Types;

});

