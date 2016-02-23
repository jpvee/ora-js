
require.config({
	shim: {
	},
	paths: {
	}
});

require(['model/Dimension', 'model/TimeSpan'], function() {

  var Dimension = require('model/Dimension');
  var TimeSpan = require('model/TimeSpan');

  var start = new Date(2, 19, 2016, 8, 13, 0); // Feb. 19, 2016, 08:13:00 a.m.
	var ts = new TimeSpan('test', start, null);

	alert(ts.getName() + " - " + ts.getStartTime());

});
