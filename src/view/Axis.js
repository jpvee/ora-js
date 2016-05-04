if (typeof define !== 'function') {
  var define = require('amdefine')(module)
}

define('view/Axis', ['model/Types'], function () {

  var Types = require("model/Types");

  var Axis = function (attr, orientation) {

    this._typeName = attr.type;
    this._type = Types.getType(this._typeName);
    this._orientation = orientation;
    this._format = attr.format || this._type.getDefaultFormat();

    this._entries = this._type.getEntries(attr);

  };

  Axis.prototype.adjustLength = function (length, attr) {
    this._length = length;
    this._entryStart = this._type.getEntryStart(length, this._entries.length, attr);
    this._entryLength = this._type.getEntryLength(length, this._entries.length, attr);
  }

  Axis.prototype.getEntries = function () {
    return this._entries;
  };

  Axis.prototype.getEntryLength = function () {
    return this._entryLength;
  };

  Axis.prototype.getEntryStart = function () {
    return this._entryStart;
  };

  Axis.prototype.initHeader = function (cell, idx) {
    $(cell).text(this._entries[idx].format(this._format));
    this._orientation.initHeader(cell);
  };

  Axis.prototype.fitHeader = function (cell, result) {
    return this._orientation.fitHeader(cell, result);
  };

  Axis.prototype.spaceHeader = function (cell, index, otherLength) {
    this._orientation.spaceHeader(cell, this._entryStart, index, this._entryLength, otherLength);
  };

  Axis.prototype.fillContent = function (area) {
    var div = document.createElement("div");
    $(area).append(div);
    for (index = 0; index < this._entries.length; index++) {
      this._orientation.fillContent(div, this._entryStart, index, this._entryLength);
    }
  };

  Axis.prototype.placeCell = function (cell, contentArea) {
    console.log("---- " + this._entryStart);
    console.log("---- " + this._entryLength);
    console.log("---- " + JSON.stringify(this._entries));
    console.log();
  };

  return Axis;

});

