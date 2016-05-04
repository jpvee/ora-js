if (typeof define !== 'function') {var define = require('amdefine')(module) }

define('view/OraCell', [], function() {

  var OraCell = function(attr) {
    this.attr = attr;
    console.log(JSON.stringify(attr));
  };

  return OraCell;

});
