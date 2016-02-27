# ArmorManager

Extend mineflayer's bot with ability to automatically equip better armor(can be configured).

![Footage should be here](/footage.gif)

## Install

### As dependency

`npm i mineflayer-armor-manager`

### As development version

```
git clone https://github.com/G07cha/MineflayerArmorManager.git
npm install
npm test
```

## Usage

```javascript
var mineflayer = require('mineflayer');
var bot = mineflayer.createBot({
  username: 'Player'
  host: 'localhost'
  port: 25565
});

// Simplest variant
require('mineflayer-armor-manager')(bot);

// Advanced usage(see 'config object') NOT SUPPORTED YET
require('mineflayer-armor-manager')(bot, {
  logging: true,
  only: ['lether', 'iron']
})
```

## API

### function(bot, config)

- bot {Object} - mineflayer's bot
- config {Object} - In progress, not supported yet.

### `config` object

- logging {Boolean} - Additional logging from module.
- only {Array} - Specify armor types that bot will be allowed to equip. Possible values: 'lether', 'iron', 'chainmail', 'diamond', 'gold'.
- exclude {Array} - Specify armor types that bot will ignore and won't equip. Possible values same as in `only` property.

Note: `only` and `exclude` properties is conflict with each other. Only one of them can be used.

## License

MIT © [Konstantin Azizov](http://g07cha.github.io)
