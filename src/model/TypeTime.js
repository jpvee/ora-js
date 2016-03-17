if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('model/TypeTime', ['moment'], function() {

  var moment = require('moment');

  var HOUR_IN_MILLIS = 1000 * 60 * 60;
  var DEFAULT_FORMAT = "HH:mm:ss";

  var TypeTime = function() {
  };

  TypeTime.getEntries = function(attr) {

    var entries = [];
    var format = attr.format || DEFAULT_FORMAT;

    var start = moment(attr.start, format);
    var end = moment(attr.end, format);
    if (end.isBefore(start)) {
      end.add(1, 'days');
    }

    if (attr.grid == 'hour') {
      start.minute(0);
      for (var mom = start; mom.isBefore(end); mom.add(1, 'hours')) {
        entries.push(mom.clone());
      }
    }

    return entries;

  };

  TypeTime.getDefaultFormat = function() {
    return DEFAULT_FORMAT;
  }

  var diffToLength = function(start, time, end, totalLength) {
    return totalLength * time.diff(start) / end.diff(start);
  }

  TypeTime.getEntryStart = function(totalLength, entryCount, attr) {

    var format = attr.format || DEFAULT_FORMAT;

    var start = moment(attr.start, format);
    var end = moment(attr.end, format);
    if (end.isBefore(start)) {
      end.add(1, 'days');
    }

    var time = start.clone();
    if (attr.grid == 'hour') {
      time.minute(0);
      return diffToLength(start, time, end, totalLength);
    }

    return TypeTime.getEntryLength(totalLength, entryCount, attr);

  }

  TypeTime.getEntryLength = function(totalLength, entryCount, attr) {

    if (attr.grid == 'hour') {
      var format = attr.format || DEFAULT_FORMAT;
      var start = moment(attr.start, format);
      var end = moment(attr.end, format);

      if (end.isBefore(start)) {
        end.add(1, 'days');
      }

      return totalLength / (end.diff(start) / HOUR_IN_MILLIS);
    }

    return (totalLength + 0.0) / entryCount;

  }

  return TypeTime;

});

