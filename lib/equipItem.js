var invUtil = require('./invUtil');

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

  if(!item) {
    return false;
  }

  const destination = invUtil.findArmorDestination(item);
  const destinationIndex = invUtil.findArmorDestinationIndex(item);

  if(destinationIndex < 0 || !destination) {
    return false;
  }

  const equippedArmor = equipped[destinationIndex];
  if(!equippedArmor || invUtil.compareArmor(item, equippedArmor)) {
    bot.equip(item, destination);
    return true;
  }

  return false;
};
