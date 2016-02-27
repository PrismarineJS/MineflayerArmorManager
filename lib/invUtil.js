var armorIds = require('../data/armor').ids;
armorIds = Object.keys(armorIds).map(function(key) {
  return armorIds[key];
});

/**
 * Searches for item with specified id in inventory
 * @param  {Object} inventory "mineflayer" bot's inventory with `slots` array in it
 * @param  {Number} itemId
 * @return {Item}  "mineflayer" item or false if nothing found
 */
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

/**
 * Compares provided armor ids and return compared result
 * @param  {Number} firstId  Minecraft armor Id
 * @param  {Number} secondId Minecraft armor id
 * @return {Boolean} true if armor with firstId better then armor with
 * secondId, elsewise, false
 */
function compareArmor(firstId, secondId) {
  maxId = 0;
  for(var i = 0, length = armorIds.length; i < length; i++) {
    if(armorIds[i] <= firstId && firstId < armorIds[i] + 4) {
      maxId = firstId;
    }

    if(armorIds[i] <= secondId && secondId < armorIds[i] + 4) {
      maxId = secondId;
    }
  }

  return maxId === firstId;
}

/**
 * Get equipped items(workaround because of https://github.com/PrismarineJS/mineflayer/issues/397)
 * @param  {Object} inventory "mineflayer" bot's inventory with `slots` array in it
 * @return {Array}  Array with equipped items
 */
function equipped(inventory) {
  return inventory.slots.slice(5, 9);
}

module.exports = {
  findItem: findItem,
  compareArmor: compareArmor,
  equipped: equipped
};
