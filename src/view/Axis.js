if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/Axis', [], function() {

  var Axis = function(attr, orientation) {

    var Types = require("model/Types");

    this.start = attr.start;
    this.end = attr.end;

    this.type = Types.getType(attr.type);
    this.orientation = orientation;
    this.format = attr.format || this.type.getDefaultFormat();

    this.entries = this.type.getEntries(attr);

  };

  Axis.prototype.adjustLength = function(length, attr) {
    this.length = length;
    this.entryStart = this.type.getEntryStart(length, this.entries.length, attr);
    this.entryLength = this.type.getEntryLength(length, this.entries.length, attr);
  }

  Axis.prototype.getEntries = function() {
    return this.entries;
  };

  Axis.prototype.getEntryLength = function() {
    return this.entryLength;
  };

  Axis.prototype.getEntryStart = function () {
    return this.entryStart;
  };

  Axis.prototype.initHeader = function(cell, idx) {
    $(cell).text(this.entries[idx].format(this.format));
    this.orientation.initHeader(cell);
  };
  
  Axis.prototype.fitHeader = function(cell, result) {
    return this.orientation.fitHeader(cell, result);
  };
  
  Axis.prototype.spaceHeader = function(cell, index, otherLength) {
    this.orientation.spaceHeader(cell, this.entryStart, index, this.entryLength, otherLength);
  };
  
  Axis.prototype.fillContent = function(area) {
    var span = document.createElement("span");
    $(area).append(span);
    for (index = 0; index < this.entries.length; index++) {
      this.orientation.fillContent(span, this.entryStart, index, this.entryLength);
    }
  };

  return Axis;

});

