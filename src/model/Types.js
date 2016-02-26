if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('model/Types', ['moment'], function() {

  var moment = require('moment');

  var Types = function() {
  };

  Types.TimeType = function() {
  };

  Types.TimeType.getEntries = function(attr) {

  };

  Types.DateType = function() {
  };

  Types.DateType.getEntries = function(attr) {
    return [moment('2016-04-13'), null, null, null, null, null, null];
  };

  Types.EnumType = function() {
  };

  Types.EnumType.getEntries = function(attr) {

  };

  Types.getType = function(type) {
    switch (type) {
      case "time" : return Types.TimeType;
      case "date" : return Types.DateType;
      case "enum" : return Types.EnumType;
      default: throw new RangeError("Only 'time', 'date' or 'enum' are allowed as parameters.");
    }
  };

  return Types;

});

