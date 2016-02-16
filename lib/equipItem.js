var armor = require('../data/armor');
var dest = armor.destionations;

// Searches for item in provided bot's inventory and equip it
module.exports = function(bot, itemId) {
  if(itemId === undefined) {
    throw new Error('Item id is missing, provide item id as second argument');
  }
  var item = findItem(bot.inventory, itemId);

  if(item) {
    var types = Object.keys(armor.ids);

    for (var i = types.length - 1; i >= 0; i--) {
      var armorId = armor.ids[types[i]];

      if(item.type >= armorId && item.type <= armorId + dest.length - 1) {
        bot.equip(item, dest[item.type - armorId]);
        return;
      }
    }
  } else {
    return false;
  }
};

function findItem(inventory, itemId) {
  // Remove empty slots to speed up process
  var inv = inventory.slots.filter(Boolean);

  for(var i = inv.length - 1; i >= 0; i--) {
    if(inv[i].type === itemId) {
      return inv[i];
    }
  }

  return false;
}
