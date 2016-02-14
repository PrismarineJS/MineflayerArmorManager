var armor = require('../data/armor');

var min = 0;
var max = 0;

Object.keys(armor.ids).forEach(function(type) {
  if(armor.ids[type] > max) {
    max = armor.ids[type];
  } else if(armor.ids[type] < min) {
    min = armor.ids[type];
  }
});
// Checking is provided id - armor's id
module.exports = function(armorId) {
  return armorId >= min && armorId <= max + armor.destionations.length;
};
