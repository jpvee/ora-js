if (typeof define !== 'function') {
  var define = require('amdefine')(module)
}

define('view/Orientation', [], function () {

  var Orientation = function (headerCellClass, gridElementClass, posStartClass, measureFuncName, measureFuncName2) {
    this._headerCellClass = headerCellClass;
    this._gridElementClass = gridElementClass;
    this._posStartClass = posStartClass;
    this._measureFuncName = measureFuncName;
    this._measureFuncName2 = measureFuncName2;
  };

  Orientation.prototype.initHeader = function (cell) {
    $(cell).addClass(this._headerCellClass);
  };

  Orientation.prototype.fitHeader = function (cell, result) {
    return Math.max(result, $(cell)[this._measureFuncName]());
  };

  Orientation.prototype.spaceHeader = function (cell, offset, index, length, otherLength) {
    $(cell).css(this._posStartClass, offset + index * length);
    $(cell)[this._measureFuncName2](length);
    $(cell)[this._measureFuncName](otherLength);
  };

  Orientation.prototype.fillContent = function (div, offset, index, length) {
    var gridElement = document.createElement("div");
    $(div).append(gridElement);
    $(gridElement).addClass(this._gridElementClass);
    $(gridElement).css(this._posStartClass, offset + index * length);
    $(gridElement)[this._measureFuncName2](length);
  };

  Orientation.RightToLeft = new Orientation("orajs-col-header", "orajs-content-col", "left", "outerHeight", "outerWidth");
  Orientation.TopToBottom = new Orientation("orajs-row-header", "orajs-content-row", "top", "outerWidth", "outerHeight");

  return Orientation;

});

