const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  username: 'Player',
  host: 'localhost',
  port: 25565
});

// Simplest variant
bot.loadPlugin(require('./dist'))
