var Dimension = require('../../src/model/Dimension');
var TimeSpan = require('../../src/model/TimeSpan');

var __ = require('hamjest');

describe('TimeSpanTest', function() {
  describe('testConstruct', function () {
    it('should correctly construct TimeSpan instance', function () {

      var start = new Date(2, 19, 2016, 8, 13, 0); // Feb. 19, 2016, 08:13:00 a.m.
      var timeSpan = new TimeSpan("Test", start, null);
      __.assertThat(timeSpan, __.is(__.not(null)));
      __.assertThat(timeSpan, __.instanceOf(TimeSpan));
      __.assertThat(timeSpan, __.instanceOf(Dimension));
      __.assertThat(timeSpan.getName(), __.is("Test"));
      __.assertThat(timeSpan.getStartTime(), __.is(__.not(null)));
      __.assertThat(timeSpan.getStartTime().getMonth(), __.is(1)); // Feb = 1!
      __.assertThat(timeSpan.getStartTime().getMinutes(), __.is(13));
      __.assertThat(timeSpan.getEndTime(), __.is(null));

    });
  });
});
