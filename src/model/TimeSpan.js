if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('model/TimeSpan', ["model/Dimension"], function() {

 var Dimension = require("model/Dimension");

  var my = {};

  var TimeSpan = function(name, startTime, endTime) {
    Dimension.call(this, name);
    my.startTime = startTime;
    my.endTime = endTime;
  }

  TimeSpan.prototype = new Dimension();
  TimeSpan.prototype.getStartTime = function() {
    return my.startTime;
  }
  TimeSpan.prototype.getEndTime = function() {
    return my.endTime;
  }

  return TimeSpan;

});

