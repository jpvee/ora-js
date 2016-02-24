
require.config({
	shim: {
	},
	paths: {
	}
});

require(['model/Dimension', 'model/TimeSpan', 'view/OraTable'], function() {

  var Dimension = require('model/Dimension');
  var TimeSpan = require('model/TimeSpan');
  var OraTable = require('view/OraTable');

	$('[data-orajs-name]').each(function() {

    var attrTable = {};
    var attrX = {};
    var attrY = {};
    var attrDef = {};

    $.each(this.attributes, function (i, attr) {
      if (attr.name.startsWith('data-orajs-x-')) {
        attrX[attr.name.substr(13)] = attr.value;
      } else if (attr.name.startsWith('data-orajs-y-')) {
        attrY[attr.name.substr(13)] = attr.value;
      } else if (attr.name.startsWith('data-orajs-')) {
        attrTable[attr.name.substr(11)] = attr.value;
      } else {
        attrDef[attr.name] = attr.value;
      }
    });

    console.log(JSON.stringify(attrTable));
    console.log(JSON.stringify(attrX));
    console.log(JSON.stringify(attrY));
    console.log(JSON.stringify(attrDef));

    var oraTable = new OraTable($(this).width(), $(this).height());

    alert (oraTable.getWidth() + "-" + oraTable.getHeight());



  });

});