var mineflayer = require('mineflayer');
var bot = mineflayer.createBot({
  username: 'Player',
  host: 'localhost',
  port: 25565
});

// Simplest variant
require('.')(bot);