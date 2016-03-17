if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/OraTable', ['view/Axis', 'view/Orientation'], function() {

  var Axis = require('view/Axis');
  var Orientation = require('view/Orientation');

  var my = {};

  var OraTable = function(tableElement, attrTable, attrX, attrY, attrDef) {
    my.tableElement = tableElement;
    my.width = attrTable['width'] || attrDef['width'];
    my.height = attrTable['height'] || attrDef['height'];
    my.axisX = new Axis(attrX, Orientation.RightToLeft);
    my.axisY = new Axis(attrY, Orientation.TopToBottom);
  };

  var initAxis = function(axis, span) {

    var entries = axis.getEntries();

    var result = 0;

    for (var idx = 0; idx < entries.length; idx++) {
      var cell = document.createElement("span");
      axis.initHeader(cell, idx);
      $(span).append(cell);
      result = axis.fitHeader(cell, result);
    }

    return result;

  };

  var spaceAxis = function(axis, header, totalLength, otherLength) {

    var cells = header.children;
    for (index = 0; index < cells.length; index++) {
      axis.spaceHeader(cells[index], index, otherLength);
    }

  };
  
  OraTable.prototype.drawGrid = function(attrX, attrY) {

    var cornerCell = document.createElement("span");
    $(my.tableElement).append(cornerCell);

    var headerRow = document.createElement("span");
    $(my.tableElement).append(headerRow);

    var headerCol = document.createElement("span");
    $(my.tableElement).append(headerCol);

    my.headerRowHeight = initAxis(my.axisX, headerRow);
    my.headerColWidth = initAxis(my.axisY, headerCol);

    my.contentWidth = my.width - my.headerColWidth;
    my.contentHeight = my.height - my.headerRowHeight;

    my.axisX.adjustLength(my.contentWidth, attrX);
    my.axisY.adjustLength(my.contentHeight, attrY);

    $(cornerCell).addClass('orajs-corner-cell');
    $(cornerCell).outerWidth(my.headerColWidth);
    $(cornerCell).outerHeight(my.headerRowHeight);

    $(headerRow).addClass('orajs-header-row');
    $(headerCol).addClass('orajs-header-col');

    $(headerRow).outerHeight(my.headerRowHeight);
    $(headerRow).outerWidth(my.contentWidth);
    $(headerRow).css('left', my.headerColWidth);
    $(headerCol).outerWidth(my.headerColWidth);
    $(headerCol).outerHeight(my.contentHeight);
    $(headerCol).css('top', my.headerRowHeight);

    // Adjust header cells
    spaceAxis(my.axisX, headerRow, my.contentWidth, my.headerRowHeight);
    spaceAxis(my.axisY, headerCol, my.contentHeight, my.headerColWidth);

    var contentArea = document.createElement("span");
    $(contentArea).addClass('orajs-content-area');
    $(contentArea).css('left', my.headerColWidth);
    $(contentArea).css('top', my.headerRowHeight);
    $(contentArea).outerWidth(my.contentWidth);
    $(contentArea).outerHeight(my.contentHeight);

    $(my.tableElement).append(contentArea);
    
    my.axisX.fillContent(contentArea);
    my.axisY.fillContent(contentArea);
    
    return contentArea;

  };

  return OraTable;

});

