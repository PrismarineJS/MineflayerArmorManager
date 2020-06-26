var minecraftData = require('minecraft-data');
var isArmor = require('./lib/isArmor');
var equipItem = require('./lib/equipItem');

module.exports = function(bot, config = {}) {
  if(!bot) {
    throw new Error('Bot object is missing, provide mineflayer bot as first argument');
  }

  var versionData;

  // Version is only detected after bot logs in 
  bot.on('login', function onLogin() {
  versionData = minecraftData(bot.version)
  })

  bot.on('playerCollect', function(collector, item) {
    try {
      const itemMetadata = item.metadata[item.metadata.length - 1]
      // In older versions blockId is used instead of itemId
      var itemId = itemMetadata.itemId || itemMetadata.blockId;
      if(collector.username === bot.username && isArmor(itemId, versionData)) {
        // Little delay to receive inventory
        setTimeout(function() {
          equipItem(bot, itemId);
        }, 100);
      }
    } catch(err) {
      if(config.logging) {
        console.log('Failed to retrieve block id, probably exp bottle');
      }
    }
  });
};
