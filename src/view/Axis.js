if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/Axis', [], function() {

  var Axis = function(attr, totalLength, orientation) {

    var Types = require("model/Types");

    this.start = attr.start;
    this.end = attr.end;

    this.type = Types.getType(attr.type);
    this.orientation = orientation;
    this.format = attr.format || this.type.getDefaultFormat();

    this.totalLength = totalLength;

    this.entries = this.type.getEntries(attr);
    this.entryStart = this.type.getEntryStart(totalLength, this.entries.length + 1, attr);
    this.entryLength = this.type.getEntryLength(totalLength, this.entries.length + 1, attr);

  }

  Axis.prototype.getEntries = function() {
    return this.entries;
  }

  Axis.prototype.getEntryLength = function() {
    return this.entryLength;
  }

  Axis.prototype.getEntryStart = function () {
    return this.entryStart;
  }

  Axis.prototype.formatHeader = function(cell, cellLength) {
    this.orientation.formatHeader(cell, cellLength);
  }
  
  Axis.prototype.formatCell = function(cell, idx, cellPos, cellLength) {
    $(cell).text(this.entries[idx].format(this.format));
    this.orientation.formatCell(cell, cellPos, cellLength);
  }

  return Axis;

});

