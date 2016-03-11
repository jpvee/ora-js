if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/OraTable', ['view/Axis', 'view/Orientation'], function() {

  var Axis = require('view/Axis');
  var Orientation = require('view/Orientation');

  var my = {};

  var OraTable = function(tableElement, attrTable, attrX, attrY, attrDef) {
    my.tableElement = tableElement;
    my.width = attrTable['width'] || attrDef['width'];
    my.height = attrTable['height'] || attrDef['height'];
    my.axisX = new Axis(attrX, my.width, Orientation.RightToLeft);
    my.axisY = new Axis(attrY, my.height, Orientation.TopToBottom);
  };

  var draw = function(axis) {

    var entries = axis.getEntries();
    var cellLength = axis.getEntryLength();
    var cellPos = axis.getEntryStart();

    var cell = document.createElement("div");
    axis.formatHeader(cell, cellLength);
    $(my.tableElement).append(cell);

    for (var idx = 0; idx < entries.length; idx++, cellPos += cellLength) {
      cell = document.createElement("div");
      axis.formatCell(cell, idx, cellPos, cellLength);
      $(my.tableElement).append(cell);
    }

  };
  
  OraTable.prototype.drawGrid = function() {
    draw(my.axisX);
    draw(my.axisY);
  };

  return OraTable;

});

