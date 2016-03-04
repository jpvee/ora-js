if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('model/TypeDate', ['moment'], function() {

  var moment = require('moment');

  var TypeDate = function() {
  };

  TypeDate.getEntries = function(attr) {
    var entries = [];
    var start = moment(attr.start);
    var end = moment(attr.end);
    if (end.isBefore(start)) {
      throw new RangeError("End date " + attr.end + " is before start date " + attr.start);
    }
    for (var mom = start; mom.isSameOrBefore(end); mom.add(1, 'days')) {
      entries.push(mom.clone());
    }
    return entries;
  };

  return TypeDate;

});
