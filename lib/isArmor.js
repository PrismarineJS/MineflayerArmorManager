var armor = require('../data/armor');

var min = Number.MAX_SAFE_INTEGER;
var max = 0;

Object.keys(armor.ids).forEach(function(type) {
  if(armor.ids[type] > max) {
    max = armor.ids[type];
  }
  if(armor.ids[type] < min) {
    min = armor.ids[type];
  }
});

/**
 * Check is provided id belongs to armor's ids
 * @param  {Number} armorId Minecraft item id
 * @return {Boolean}         true if armor elsewise false
 */
module.exports = function(armorId) {
  if(armorId) {
    return armorId >= min && armorId <= max + armor.destinations.length;
  } else {
    throw new Error('Armor id is missing');
  }
};
