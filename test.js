var assert = require('assert');
var mineflayer = require('mineflayer');
var mc = require('minecraft-protocol');

var ArmorManager = require('./');

var bot, server;

describe('Basic', function() {
  beforeEach(function(done) {
    server = mc.createServer({ 'online-mode': false });
    server.on('listening', function() {
      bot = mineflayer.createBot({
        username: 'Player'
      });

      done();
    });
  });

  afterEach(function(done) {
    bot.on('end', done);
    server.close();
  });

  it('should register picked items', function(done) {
    ArmorManager(bot, {});

    server.on('login', function(client) {
      client.write('login', {
        entityId: client.id,
        gameMode: 0,
        dimension: 0,
        difficulty: 2,
        maxPlayers: server.maxPlayers,
        levelType: 'default'
      });
      client.write('collect', {
        collectedEntityId: 308,
        collectorEntityId: client.id
      });
      client.write('collect', {
        collectedEntityId: 308,
        collectorEntityId: client.id
      });
    });
  });
});
