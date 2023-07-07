import { Plugin } from "mineflayer";

import { isArmor } from "./lib/isArmor";
import { equipItem } from "./lib/equipItem";

declare module "mineflayer" {
  interface Bot {
    armorManager: {
      equipAll: () => Promise<void>;
    };
  }
}

const initializeBot: Plugin = (bot) => {
  if (!bot) {
    throw new Error(
      "Bot object is missing, provide mineflayer bot as first argument",
    );
  }

  bot.armorManager = {
    equipAll: async () => {
      for (const item of bot.inventory.items()) {
        await equipItem(bot, item.type);
      }
    },
  };

  bot.on("playerCollect", (collector, collected) => {
    if (collector.username !== bot.username) {
      return;
    }
    const item = collected.getDroppedItem();
    if (item != null && isArmor(item)) {
      // Little delay to receive inventory
      setTimeout(() => equipItem(bot, item.type), 100);
    }
  });
};

export = initializeBot;
