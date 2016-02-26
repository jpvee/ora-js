var requirejs = require("requirejs");

requirejs.config({
  baseUrl: 'src',
  nodeRequire: require,
  paths: {
    "moment": "node_modules/moment"
  }
});

var __ = require('hamjest');

describe('TypesTest', function() {

  var Types;
  var moment;

  before(function (done) {
    requirejs(['model/Types'], function() {
      Types = requirejs('model/Types');
      moment = requirejs('moment');
      done();
    })
  });

  describe('#testGetType', function () {

    it('should correctly choose the type depending on the parameters', function () {

      __.assertThat(Types.getType('date'), __.is(Types.DateType));
      __.assertThat(Types.getType('time'), __.is(Types.TimeType));
      __.assertThat(Types.getType('enum'), __.is(Types.EnumType));

      try {
        __.assertThat(Types.getType('null'), __.is(null));
        __.fail("RangeError expected.");
      } catch (err) {
        __.assertThat(err, __.instanceOf(RangeError));
        __.assertThat(err.message, __.is("Only 'time', 'date' or 'enum' are allowed as parameters."));
      }

    });

  });

  describe('#testDateType', function() {

    it('should correctly compute the entries of a date type schedule', function() {

      var attr = {'start' : '2016-04-13', 'end' : '2016-04-19'};
      var entries = Types.DateType.getEntries(attr);
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
