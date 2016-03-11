if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/Orientation', [], function() {

  var Orientation = {};
  
  Orientation.RightToLeft = {

    formatHeader : function(cell, length) {
      $(cell).addClass("orajs-header");
      $(cell).addClass("orajs-col");
      $(cell).css("left", 0);
      $(cell).width(length);
    },

    formatCell : function (cell, start, length) {
      $(cell).addClass("orajs-col");
      $(cell).css("left", start);
      $(cell).width(length);
    }

  };

  Orientation.TopToBottom = {

    formatHeader : function(cell, length) {
      $(cell).addClass("orajs-header");
      $(cell).addClass("orajs-row");
      $(cell).css("top", 0);
      $(cell).height(length);
    },

    formatCell : function (cell, start, length) {
      $(cell).addClass("orajs-row");
      $(cell).css("top", start);
      $(cell).height(length);
    }

  };

  return Orientation;

});

