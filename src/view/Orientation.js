if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/Orientation', [], function() {

  var Orientation = {};
  
  Orientation.RightToLeft = {

    initHeader : function(cell) {
      $(cell).addClass("orajs-col-header");
    },
    
    fitHeader : function(cell, result) {
      return Math.max(result, $(cell).outerHeight());
    },
    
    spaceHeader : function(cell, index, length, otherLength) {
      $(cell).css('left', index * length);
      $(cell).outerWidth(length);
      $(cell).outerHeight(otherLength);
    },

    fillContent : function(span, position, length) {
      var gridElement = document.createElement("span");
      $(span).append(gridElement);
      $(gridElement).addClass('orajs-content-col');
      $(gridElement).css('left', position);
      $(gridElement).outerWidth(length);
    }

  };

  Orientation.TopToBottom = {

    initHeader : function(cell) {
      $(cell).addClass("orajs-row-header");
    },

    fitHeader : function(cell, result) {
      return Math.max(result, $(cell).outerWidth());
    },

    spaceHeader : function(cell, index, length, otherLength) {
      $(cell).css('top', index * length);
      $(cell).outerHeight(length);
      $(cell).outerWidth(otherLength);
    },

    fillContent : function(span, position, length) {
      var gridElement = document.createElement("span");
      $(span).append(gridElement);
      $(gridElement).addClass('orajs-content-row');
      $(gridElement).css('top', position);
      $(gridElement).outerHeight(length);
    }

  };

  return Orientation;

});

