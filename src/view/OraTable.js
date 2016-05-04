if (typeof define !== 'function') {
  var define = require('amdefine')(module)
}

define('view/OraTable', ['view/Axis', 'view/Orientation', 'view/OraCell'], function () {

  var Axis = require('view/Axis');
  var Orientation = require('view/Orientation');
  var OraCell = require('view/OraCell');

  var OraTable = function (tableElement, attrTable, attrX, attrY, attrDef) {

    this._tableElement = tableElement;
    this._width = attrTable['width'] || attrDef['width'];
    this._height = attrTable['height'] || attrDef['height'];
    this._axisX = new Axis(attrX, Orientation.RightToLeft);
    this._axisY = new Axis(attrY, Orientation.TopToBottom);

  };

  OraTable.prototype._initAxis = function (axis, div) {

    var entries = axis.getEntries();

    var result = 0;

    for (var idx = 0; idx < entries.length; idx++) {
      var cell = document.createElement("div");
      axis.initHeader(cell, idx);
      $(div).append(cell);
      result = axis.fitHeader(cell, result);
    }

    return result;

  };

  OraTable.prototype._spaceAxis = function (axis, header, totalLength, otherLength) {

    var cells = header.children;
    for (index = 0; index < cells.length; index++) {
      axis.spaceHeader(cells[index], index, otherLength);
    }

  };

  OraTable.prototype._placeCell = function (cell, contentArea, axis) {

    axis.placeCell(cell, contentArea)

  };

  OraTable.prototype.drawGrid = function (attrX, attrY) {

    var cornerCell = document.createElement("div");
    $(this._tableElement).append(cornerCell);

    var headerRow = document.createElement("div");
    $(this._tableElement).append(headerRow);

    var headerCol = document.createElement("div");
    $(this._tableElement).append(headerCol);

    this._headerRowHeight = this._initAxis(this._axisX, headerRow);
    this._headerColWidth = this._initAxis(this._axisY, headerCol);

    this._contentWidth = this._width - this._headerColWidth;
    this._contentHeight = this._height - this._headerRowHeight;

    this._axisX.adjustLength(this._contentWidth, attrX);
    this._axisY.adjustLength(this._contentHeight, attrY);

    $(cornerCell).addClass('orajs-corner-cell');
    $(cornerCell).outerWidth(this._headerColWidth);
    $(cornerCell).outerHeight(this._headerRowHeight);

    $(headerRow).addClass('orajs-header-row');
    $(headerCol).addClass('orajs-header-col');

    $(headerRow).outerHeight(this._headerRowHeight);
    $(headerRow).outerWidth(this._contentWidth);
    $(headerRow).css('left', this._headerColWidth);
    $(headerCol).outerWidth(this._headerColWidth);
    $(headerCol).outerHeight(this._contentHeight);
    $(headerCol).css('top', this._headerRowHeight);

    // Adjust header cells
    this._spaceAxis(this._axisX, headerRow, this._contentWidth, this._headerRowHeight);
    this._spaceAxis(this._axisY, headerCol, this._contentHeight, this._headerColWidth);

    var contentArea = document.createElement("div");
    $(contentArea).addClass('orajs-content-area');
    $(contentArea).css('left', this._headerColWidth);
    $(contentArea).css('top', this._headerRowHeight);
    $(contentArea).outerWidth(this._contentWidth);
    $(contentArea).outerHeight(this._contentHeight);

    $(this._tableElement).append(contentArea);

    this._axisX.fillContent(contentArea);
    this._axisY.fillContent(contentArea);

    return contentArea;

  };

  OraTable.prototype.placeCells = function (contentArea) {

    var $this = this;

    $(this._tableElement).children('.orajs-cell').each(function () {

      var attr = {};
      $.each(this.attributes, function (i, att) {
        if (att.name.startsWith('data-orajs-')) {
          attr[att.name.substr(11)] = att.value;
        }
      });
      var cell = new OraCell(attr);

      $this._placeCell(cell, contentArea, $this._axisX);
      $this._placeCell(cell, contentArea, $this._axisY);

    });

  };

  return OraTable;

});

