var requirejs = require("requirejs");

requirejs.config({
  baseUrl: 'src',
  nodeRequire: require,
  paths: {
    "moment": "node_modules/moment"
  }
});

var __ = require('hamjest');

describe('TypeDateTest', function() {

  var moment;
  var TypeDate;

  before(function (done) {
    requirejs([], function() {
      TypeDate = requirejs('model/TypeDate');
      moment = requirejs('moment');
      done();
    })
  });

  describe('#testGetEntries', function() {

    it('should correctly compute the entries of a date type schedule', function() {

      var attr = {'start' : '2016-04-13', 'end' : '2016-04-19'};
      var entries = TypeDate.getEntries(attr);
      var df = 'YYYY-MM-DD HH:mm:ss';

      __.assertThat(entries, __.defined());
      __.assertThat(entries, __.not(null));
      __.assertThat(entries, __.array());
      __.assertThat(entries.length, __.is(7));

      var start = entries[0];
      var end = entries[6];

      __.assertThat(start, __.not(null));
      __.assertThat(start, __.instanceOf(moment));

      var startFmt = moment(start).format(df);
      __.assertThat(startFmt, __.is('2016-04-13 00:00:00'));

    });

  });

});
