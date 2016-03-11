if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('model/TypeDate', ['moment'], function() {

  var moment = require('moment');

  var DEFAULT_FORMAT = "YYYY-MM-DD";

  var TypeDate = function() {
  };

  TypeDate.getEntries = function(attr) {

    var entries = [];
    var format = attr.format || DEFAULT_FORMAT;

    var start = moment(attr.start, format);
    var end = moment(attr.end, format);

    if (end.isBefore(start)) {
      throw new RangeError("End date " + attr.end + " is before start date " + attr.start);
    }
    for (var mom = start; mom.isSameOrBefore(end); mom.add(1, 'days')) {
      entries.push(mom.clone());
    }
    return entries;
  };
  
  TypeDate.getDefaultFormat = function() {
    return DEFAULT_FORMAT;
  }

  TypeDate.getEntryStart = function(totalLength, entryCount, attr) {
    return TypeDate.getEntryLength(totalLength, entryCount, attr)
  }

  TypeDate.getEntryLength = function(totalLength, entryCount, attr) {
    return (totalLength + 0.0) / entryCount;
  }
  
  return TypeDate;

});

