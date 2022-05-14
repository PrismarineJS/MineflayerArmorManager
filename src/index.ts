import minecraftData from "minecraft-data";
import { Plugin } from "mineflayer";

import { IndexedData } from "./types";
import { isArmor } from "./lib/isArmor";
import { equipItem } from "./lib/equipItem";
import { Item } from "prismarine-item";

const initializeBot: Plugin = (bot, options) => {
  if (!bot) {
    throw new Error(
      "Bot object is missing, provide mineflayer bot as first argument"
    );
  }

  // @ts-expect-error
  bot.armorManager = {}

  // @ts-expect-error
  bot.armorManager.equipAll = function () {
    for (const item of bot.inventory.items()) {
      equipItem(bot, item.type)
    }
  }

  let versionData: IndexedData;
  if (bot.version) {
    versionData = minecraftData(bot.version);
  }

  // Version is only detected after bot logs in
  bot.on("login", function onLogin() {
    versionData = minecraftData(bot.version);
  });

  bot.on("playerCollect", function onPlayerCollect(collector, collected) {
    if (collector.username !== bot.username) {
      return;
    }
    const item = collected.getDroppedItem()
    if (item != null && isArmor(itemId, versionData)) {
      // Little delay to receive inventory
      setTimeout(() => equipItem(bot, itemId), 100);
    }
  });
};

export = initializeBot;
