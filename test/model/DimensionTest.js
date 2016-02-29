var requirejs = require("requirejs");

requirejs.config({
  baseUrl: 'src',
  nodeRequire: require
});

var __ = require('hamjest');

describe('DimensionTest', function() {

  var Dimension;

  before(function (done) {
    requirejs([], function() {
      Dimension = requirejs('model/Dimension');
      done();
    })
  });

  describe('#testConstruct', function () {

    it('should correctly construct Dimension instance', function () {

      var dimension = new Dimension("Test");
      __.assertThat(dimension, __.is(__.not(null)));
      __.assertThat(dimension.getName(), __.is("Test"));

    });

  });

});
