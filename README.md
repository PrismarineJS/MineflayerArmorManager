# ArmorManager

Extend [mineflayer's](https://github.com/PrismarineJS/mineflayer) bot with ability to automatically equip better armor.

![Footage should be here](/footage.gif)

## Install

### Prerequisites

- NodeJS 12.18 or higher
- Yarn

### As dependency

If using NPM:

`npm install mineflayer-armor-manager`

If using yarn:

`yarn add mineflayer-armor-manager`

### As development version

```bash
git clone https://github.com/G07cha/MineflayerArmorManager.git
yarn install
yarn build
```

## Usage

```javascript
const armorManager = require('mineflayer-armor-manager')
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  username: 'Player',
  host: 'localhost',
  port: 25565
});

bot.loadPlugin(armorManager);
```

## License

MIT © [Konstantin Azizov](http://g07cha.github.io)
