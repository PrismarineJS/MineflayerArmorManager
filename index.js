var minecraftData = require('minecraft-data');
var isArmor = require('./lib/isArmor');
var equipItem = require('./lib/equipItem');

module.exports = function(bot, config) {
  if(!bot) {
    throw new Error('Bot object is missing, provide mineflayer bot as first argument');
  }

  var mcData = minecraftData(config.version || "1.8.8");

  bot.on('playerCollect', function(collector, item) {
    try {
      var itemId = item.metadata['10'].blockId;
      if(collector.username === bot.username && isArmor(itemId)) {
        // Little delay to receive inventory
        setTimeout(function() {
          equipItem(bot, itemId);
        }, 100);
      }
    } catch(err) {
      if(config.logging) {
        console.log('Failed to retrive block id, probably exp bottle');
      }
    }
  });
};
