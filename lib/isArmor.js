var assert = require('assert');
var armor = require('../data/armor');

const armorTypes = Object.keys(armor.typeDestinationMap);

/**
 * Check if provided itemId is armor
 * @param  {Number} itemId 
 * @param  {Object} versionData initialized instance of minecraft-data 
 * @return {Boolean}         true if armor otherwise false
 */
module.exports = function(itemId, versionData) {
  assert(itemId, 'Item id is missing')
  assert(versionData, 'Initialized MCData is missing')
  var item = versionData.findItemOrBlockById(itemId)

  return item && armorTypes.some(type => item.name.endsWith(type));
};
