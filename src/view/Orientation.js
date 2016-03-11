if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/Orientation', [], function() {

  var Orientation = {};
  
  Orientation.RightToLeft = {

    initHeader : function(cell) {
      $(cell).addClass("orajs-col-header");
      // $(cell).addClass("orajs-col");
      // $(cell).css("left", 0);
      // $(cell).width(length);
    },
    
    fitHeader : function(cell, result) {
      return Math.max(result, $(cell).outerHeight());
    }

  };

  Orientation.TopToBottom = {

    initHeader : function(cell) {
      $(cell).addClass("orajs-row-header");
      // $(cell).addClass("orajs-row");
      // $(cell).css("top", 0);
      // $(cell).height(length);
    },

    fitHeader : function(cell, result) {
      return Math.max(result, $(cell).outerWidth());
    }

  };

  return Orientation;

});

