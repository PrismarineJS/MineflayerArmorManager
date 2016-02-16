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
// Checking is provided id - armor's id
module.exports = function(armorId) {
  if(armorId) {
    return armorId >= min && armorId <= max + armor.destionations.length;
  } else {
    throw new Error('Armor id is missing');
  }
};
