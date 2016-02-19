var Dimension = require('../../src/model/Dimension');

var __ = require('hamjest');

describe('DimensionTest', function() {
  describe('testConstruct', function () {
    it('should correctly construct Dimension instance', function () {

      var dimension = new Dimension("Test");
      __.assertThat(dimension, __.is(__.not(null)));
      __.assertThat(dimension.getName(), __.is("Test"));

    });
  });
});
