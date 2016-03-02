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

    var col = document.createElement("div");
    $(col).text('ORA-JS');
    $(my.tableElement).append(col);
    for (var mom in my.axisX.getEntries()) {
      col = document.createElement("div");
      $(col).text(mom.format('DD.MM.YYYY'));
      $(my.tableElement).append(col);
    }

  };

  return OraTable;

});

