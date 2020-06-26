var armor = require('../data/armor');

/**
 * Searches for item with specified id in inventory
 * @param  {Object} inventory "mineflayer" bot's inventory with `slots` array in it
 * @param  {Number} itemId
 * @return {Item}  "mineflayer" item or false if nothing found
 */
function findItem(inventory, itemId) {
  return inventory.slots.find(item => item && item.type === itemId);
}

const types = Object.keys(armor.typeDestinationMap)
function findArmorDestinationIndex(item) {
  return types.findIndex((type) => item.name.endsWith(type));
}

function findArmorDestination(item) {
  const type = types.find((type) => item.name.endsWith(type));
  return armor.typeDestinationMap[type]
}

/**
 * Compares provided armor ids and return compared result
 * @param  {Object} a minecraft item
 * @param  {Object} b minecraft item
 * @return {Boolean} true if armor with firstId better then armor with
 * secondId, otherwise, false
 */
function compareArmor(a, b) {
  var aRank = armor.materials.findIndex(material => a.name.startsWith(material));
  var bRank = armor.materials.findIndex(material => b.name.startsWith(material));
  return aRank > bRank;
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
  findArmorDestinationIndex: findArmorDestinationIndex,
  findArmorDestination: findArmorDestination,
  compareArmor: compareArmor,
  equipped: equipped
};
