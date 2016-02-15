var TimeSpan = require('model/TimeSpan');

var __ = require('hamjest');

describe('TimeSpanTest', function() {
  describe('testConstruct', function () {
    it('should correctly construct TimeSpan instance', function () {

      var timeSpan = new TimeSpan(null, null);
      __.assertThat(timeSpan, __.is(__.not(null)));
      __.assertThat(timeSpan.startTime, __.is(null));

    });
  });
});
