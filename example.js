const mineflayer = require("mineflayer");
const bot = mineflayer.createBot({
  username: "Player",
  host: "localhost",
  port: 25565,
});

bot.loadPlugin(require("./dist"));

bot.once("spawn", () => bot.armorManager.equipAll());
