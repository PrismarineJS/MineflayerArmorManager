import * as invUtil from "./invUtil";
import { Bot } from "mineflayer";

/**
 * Search for item in bot's inventory and equips it
 * @return {Boolean}   true if item equipped successfully, false if something went wrong
 */
export const equipItem = (bot: Bot, itemId: number): boolean => {
  if (itemId === undefined) {
    throw new Error("Item id is missing, provide item id as second argument");
  }
  var item = invUtil.findItemById(bot.inventory, itemId);
  var equipped = invUtil.equipped(
    bot.inventory,
    !bot.supportFeature("doesntHaveOffHandSlot")
  );

  if (!item) {
    return false;
  }

  const destination = invUtil.findArmorDestination(item);
  const destinationIndex = invUtil.findArmorDestinationIndex(item);

  if (destinationIndex < 0 || !destination) {
    return false;
  }

  const equippedArmor = equipped[destinationIndex];
  if (!equippedArmor || invUtil.isNewArmorBetter(equippedArmor, item)) {
    bot.equip(item, destination);
    return true;
  }

  return false;
};
