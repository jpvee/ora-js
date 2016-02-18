var requirejs = require('requirejs');
requirejs.config({nodeRequire: require});

//requirejs(['../src/utils'], function(utils) {
//
//  suite('utils', function() {
//    test('should always work', function() {
//      assert.equal(1, 1);
//    })
//  })
//
//});
var Dimension = require('../../src/model/Dimension');

var __ = require('hamjest');

describe('DimensionTest', function() {
  describe('testConstruct', function () {
    it('should correctly construct Dimension instance', function () {

      var dimension = new Dimension();
      __.assertThat(dimension, __.is(__.not(null)));

    });
  });
});
