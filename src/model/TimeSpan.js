define("model/TimeSpan", ["model/Dimension"], function() {

  var Dimension = require("model/Dimension");

  TimeSpan = function(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  return TimeSpan;

});
