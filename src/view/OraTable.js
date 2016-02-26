if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/OraTable', [], function() {

  var my = {};

  var OraTable = function(attrTable, attrX, attrY, attrDef) {
    my.width = attrTable['width'] || attrDef['width'];
    my.height = attrTable['height'] || attrDef['height'];
    my.axisX = new Axis(attrX);
    my.axisY = new Axis(attrY);
  }

  OraTable.prototype.getWidth = function() {
    return my.width;
  }

  OraTable.prototype.getHeight = function() {
    return my.height;
  }

  return OraTable;

});

