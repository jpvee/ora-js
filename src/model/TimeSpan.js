if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('model/TimeSpan', [], function() {

  var Dimension = require("model/Dimension");

  var TimeSpan = function(name, startTime, endTime) {
    Dimension.call(this, name);
    this._startTime = startTime;
    this._endTime = endTime;
  }

  TimeSpan.prototype = new Dimension();
  
  TimeSpan.prototype.getStartTime = function() {
    return this._startTime;
  }
  TimeSpan.prototype.getEndTime = function() {
    return this._endTime;
  }

  return TimeSpan;

});

