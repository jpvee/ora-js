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

  var initAxis = function(axis, span) {

    var entries = axis.getEntries();
    var cellLength = axis.getEntryLength();
    var cellPos = axis.getEntryStart();

    var result = 0;

    for (var idx = 0; idx < entries.length; idx++, cellPos += cellLength) {
      var cell = document.createElement("span");
      axis.initHeader(cell, idx);
      $(span).append(cell);
      result = axis.fitHeader(cell, result);
    }

    return result;

  };

  OraTable.prototype.drawGrid = function() {

    var headerRow = document.createElement("span");
    $(headerRow).addClass('orajs-header-row');
    $(my.tableElement).append(headerRow);
    var headerCol = document.createElement("span");
    $(headerCol).addClass('orajs-header-col');
    $(my.tableElement).append(headerCol);

    my.headerRowHeight = initAxis(my.axisX, headerRow);
    my.headerColWidth = initAxis(my.axisY, headerCol);
    console.log(my.headerRowHeight);
    console.log(my.headerColWidth);

    var contentArea = document.createElement("span");
    $(contentArea).addClass('orajs-content-area');
    $(contentArea).css('left', my.headerColWidth);
    $(contentArea).css('top', my.headerRowHeight);
    $(contentArea).width(my.width - my.headerColWidth);
    $(contentArea).height(my.height - my.headerRowHeight);

    $(my.tableElement).append(contentArea);
    
  };

  return OraTable;

});

