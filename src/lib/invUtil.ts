import { TypeDestination, materials } from "../data/armor";
import { Item } from "prismarine-item";
import { Window } from "prismarine-windows";
import { keys } from "rambda";

const types = keys(TypeDestination);

export const findItemById = (inventory: Window, itemId: number) => {
  return inventory.slots.find((item) => item && item.type === itemId);
};

export const findArmorDestinationIndex = (item: Item) =>
  types.findIndex((type) => item.name.endsWith(type));

export const findArmorDestination = (item: Item) => {
  const type = types.find((type) => item.name.endsWith(type));
  return type && TypeDestination[type];
};

export const isNewArmorBetter = (oldArmor: Item, newArmor: Item): boolean => {
  var oldArmorRank = materials.findIndex((material) =>
    oldArmor.name.startsWith(material)
  );
  var newArmorRank = materials.findIndex((material) =>
    newArmor.name.startsWith(material)
  );
  return newArmorRank > oldArmorRank;
};

/**
 * Get equipped items(workaround because of https://github.com/PrismarineJS/mineflayer/issues/397)
 */
export const equipped = (inventory: Window): readonly Item[] =>
  inventory.slots.slice(5, 9);
