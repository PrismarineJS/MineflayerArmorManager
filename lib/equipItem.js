var armor = require('../data/armor');
var dest = armor.destionations;

// Searches for item in provided bot's inventory and equip it
module.exports = function(bot, itemId) {
  item = findItem(bot.inventory, itemId);

  if(item) {
    Object.keys(armor.ids).forEach(function(type) {
      var armorId = armor.ids[type];
      if(item.type >= armorId &&
      item.type <= armorId + dest.length - 1) {
        bot.equip(item, dest[item.type - armorId],
          function(err) {
            if(err) {
              throw err;
            }
        });
        return;
      }
    });
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
