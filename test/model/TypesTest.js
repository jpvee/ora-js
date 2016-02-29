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
  var TypeDate;
  var TypeTime;
  var TypeEnum;

  before(function (done) {
    requirejs([], function() {
      Types = requirejs('model/Types');
      TypeDate = requirejs('model/TypeDate');
      TypeTime = requirejs('model/TypeTime');
      TypeEnum = requirejs('model/TypeEnum');
      done();
    })
  });

  describe('#testGetType', function () {

    it('should correctly choose the type depending on the parameters', function () {

      __.assertThat(Types.getType('date'), __.is(TypeDate));
      __.assertThat(Types.getType('time'), __.is(TypeTime));
      __.assertThat(Types.getType('enum'), __.is(TypeEnum));

      try {
        __.assertThat(Types.getType('null'), __.is(null));
        __.fail("RangeError expected.");
      } catch (err) {
        __.assertThat(err, __.instanceOf(RangeError));
        __.assertThat(err.message, __.is("Only 'time', 'date' or 'enum' are allowed as parameters."));
      }

    });

  });

});
