import minecraftData from "minecraft-data";
import { Plugin } from "mineflayer";

import { IndexedData } from "./types";
import { isArmor } from "./lib/isArmor";
import { equipItem } from "./lib/equipItem";

const initializeBot: Plugin = (bot, options) => {
  if (!bot) {
    throw new Error(
      "Bot object is missing, provide mineflayer bot as first argument"
    );
  }

  let versionData: IndexedData;

  // Version is only detected after bot logs in
  bot.on("login", function onLogin() {
    versionData = minecraftData(bot.version);
  });

  bot.on("playerCollect", function onPlayerCollect(collector, item) {
    try {
      const itemMetadata = item.metadata[item.metadata.length - 1] as any;
      // In older versions blockId is used instead of itemId
      var itemId =
        "itemId" in itemMetadata
          ? itemMetadata.itemId
          : "blockId" in itemMetadata && itemMetadata.blockId;
      if (
        itemId &&
        collector.username === bot.username &&
        isArmor(itemId, versionData)
      ) {
        // Little delay to receive inventory
        setTimeout(() => equipItem(bot, itemId), 100);
      }
    } catch (err) {
      if (options.logErrors) {
        console.log("Failed to retrieve block id, probably exp bottle");
      }
    }
  });
};

export = initializeBot;
