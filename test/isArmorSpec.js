var assert = require('assert');
var isArmor = require('../lib/isArmor');

describe('isArmor', function() {
  it('should return true if provided id is armor\'s id', function() {
    assert.equal(isArmor(302), true);
  });

  it('should return false if provided id isn\'t armor\'s id', function() {
    assert.equal(isArmor(1), false);
  });

  it('should return false if provided id isn\'t armor\'s id', function() {
    assert.equal(isArmor(1000), false);
  });

  it('should throw error if no id provided', function() {
    assert.throws(function() {
      isArmor();
    });
  });
});
