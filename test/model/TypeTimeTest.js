var requirejs = require("requirejs");

requirejs.config({
  baseUrl: 'src',
  nodeRequire: require,
  paths: {
    "moment": "node_modules/moment"
  }
});

var __ = require('hamjest');

describe('TypeTimeTest', function() {

  var moment;
  var TypeTime;

  before(function (done) {
    requirejs([], function() {
      TypeTime = requirejs('model/TypeTime');
      moment = requirejs('moment');
      done();
    })
  });

  describe('#testGetEntries', function() {

    it('should correctly compute the entries of a time type schedule', function() {

      var attr = {'start' : '09:45', 'end' : '17:15', 'grid' : 'hour'};
      var entries = TypeTime.getEntries(attr);
      var df = 'HH:mm:ss';

      __.assertThat(entries, __.defined());
      __.assertThat(entries, __.not(null));
      __.assertThat(entries, __.array());
      __.assertThat(entries.length, __.is(9));

      var start = entries[0];
      var end = entries[8];

      __.assertThat(start, __.not(null));
      __.assertThat(start, __.instanceOf(moment));

      var startFmt = moment(start).format(df);
      __.assertThat(startFmt, __.is('09:00:00'));

      __.assertThat(end, __.not(null));
      __.assertThat(end, __.instanceOf(moment));

      var endFmt = moment(end).format(df);
      __.assertThat(endFmt, __.is('17:00:00'));

    });

  });

});
