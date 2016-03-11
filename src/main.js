
require.config({
	shim: {
	},
	paths: {
    'moment' : '../node_modules/moment/moment'
	}
});

require(['model/Dimension', 'model/TimeSpan', 'view/OraTable', 'model/Types'], function() {

  var Dimension = require('model/Dimension');
  var TimeSpan = require('model/TimeSpan');
  var OraTable = require('view/OraTable');

	$('[data-orajs-name]').each(function() {

    var attrTable = {};
    var attrX = {};
    var attrY = {};
    var attrDef = {
      'width' : $(this).width(),
      'height' : $(this).height()
    };

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

    var oraTable = new OraTable(this, attrTable, attrX, attrY, attrDef);
    oraTable.drawGrid()



  });

});
