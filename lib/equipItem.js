var invUtil = require('./invUtil');
var armor = require('../data/armor');
var dest = armor.destinations;

/**
 * Search for item in provided bot's inventory and equip it
 * @param  {Object} bot    mineflayer's bot
 * @param  {Number} itemId Picked up item id
 * @return {Boolean}   true if item equipped succesfully, false if something went wrong
 */
module.exports = function(bot, itemId) {
  if(itemId === undefined) {
    throw new Error('Item id is missing, provide item id as second argument');
  }
  var item = invUtil.findItem(bot.inventory, itemId);
  var equipped = invUtil.equipped(bot.inventory);

  if(item) {
    // Find destination for armor
    var types = Object.keys(armor.ids);

    for (var i = types.length - 1; i >= 0; i--) {
      var armorId = armor.ids[types[i]];

      if(item.type >= armorId && item.type <= armorId + dest.length - 1) {
        var destId = item.type - armorId;
        if(equipped[destId] === null ||
          invUtil.compareArmor(item.type, equipped[destId].type)) {
          bot.equip(item, dest[destId]);
          return true;
        }
        return false;
      }
    }
  } else {
    return false;
  }
};
