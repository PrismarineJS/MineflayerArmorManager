# ArmorManager

Plugin for [MineFlayer](https://github.com/PrismarineJS/mineflayer), that makes bot automatically equip better armor.

![Footage](/footage.gif)

## Getting started

If using **NPM**:

`npm install mineflayer-armor-manager`

If using **YARN**:

`yarn add mineflayer-armor-manager`

## Usage

```js
const armorManager = require("mineflayer-armor-manager");
const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  username: "Player",
  host: "localhost",
  port: 25565,
});

bot.loadPlugin(armorManager);
```

If needed, it's possible to trigger a function that will check whole inventory and equip best possible armor, on spawn for example:

```js
bot.once("spawn", () => bot.armorManager.equipAll());
```

## License

MIT © [Konstantin Azizov](https://github.com/G07cha/)
