var assert = require('assert');
var equipItem = require('../lib/equipItem');

describe('Equip item(integration)', function() {
  var bot;

  beforeEach(function() {
    bot = {
      inventory: {
        slots: [
          null,
          {
            type: 302
          },
          null,
          {
            type: 1
          },
          null, null, null, null, null
        ]
      },
    };
  });

  it('should throw error if no itemId provided', function() {
    assert.throws(function() {
      equipItem(bot);
    });
  });

  it('should return false if item doesn\'t exists in inventory', function() {
    assert.equal(equipItem(bot, 500), false);
  });

  it('shouldn\'t return non-armor item', function() {
    assert.equal(equipItem(bot, 1), undefined);
  });

  it('should return armor from inventory and destination', function() {
    bot.equip = function(item, dest) {
      assert.deepEqual(item, { type: 302 });
      assert.equal(dest, 'head');
    };

    equipItem(bot, 302);
  });

  it('should ignore specific armor types');
});
