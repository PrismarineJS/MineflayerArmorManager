var assert = require('assert');
var invUtil = require('../lib/invUtil');

var inventory = {
  slots: [
    null,
    {
      type: 12
    }, null,
    {
      type: 5
    }, null, null, null, null, null
  ]
};

describe('Inventory utils', function() {
  describe('Find item', function() {
    it('should return false if item doesn\'t exists', function() {
      assert.equal(invUtil.findItem(inventory, 102), false);
    });

    it('should return existing item', function() {
      assert(invUtil.findItem(inventory, 12));
    });

    it('should return false if no item id provided', function() {
      assert.equal(invUtil.findItem(inventory), false);
    });
  });

  describe('Compare armor', function() {
    it('should return correct result for armor by id', function() {
      assert(invUtil.compareArmor(314, 298), 'Golden > Lether');
      assert(invUtil.compareArmor(306, 314), 'Iron > Golden');
      assert.equal(invUtil.compareArmor(306, 310), false, 'Iron < Diamond');

      assert(invUtil.compareArmor(307, 299), 'Iron > Lether');
    });

    it('should return true if second operator isn\'t provided', function() {
      assert(invUtil.compareArmor(306));
    });
  });

  describe('Equipped armor', function() {
    var equipped = invUtil.equipped(inventory);
    it('should return correct size of equipped items', function() {
      assert.equal(equipped.length, 4);
    });
  });
});
