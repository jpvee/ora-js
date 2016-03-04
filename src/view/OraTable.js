if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/OraTable', ['view/Axis'], function() {

  var Axis = require('view/Axis');

  var my = {};

  var OraTable = function(tableElement, attrTable, attrX, attrY, attrDef) {
    my.tableElement = tableElement;
    my.width = attrTable['width'] || attrDef['width'];
    my.height = attrTable['height'] || attrDef['height'];
    my.axisX = new Axis(attrX);
    my.axisY = new Axis(attrY);
  };

  OraTable.prototype.getWidth = function() {
    return my.width;
  };

  OraTable.prototype.getHeight = function() {
    return my.height;
  };

  OraTable.prototype.drawColumns = function() {

    var entries = my.axisX.getEntries();
    var colWidth = (my.width + 0.0) / (entries.length + 1.0);

    var col = document.createElement("div");
    $(col).width(colWidth);
    $(my.tableElement).append(col);

    for (var idx = 0, colLeft = colWidth; idx < entries.length; idx++, colLeft += colWidth) {
      col = document.createElement("div");
      $(col).text(entries[idx].format('DD.MM.YYYY'));
      $(col).addClass("orajs-col");
      $(col).width(colWidth);
      $(col).css("left", colLeft);
      $(my.tableElement).append(col);
    }

  };

  return OraTable;

});

