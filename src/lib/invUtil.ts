import {
  DESTINATIONS,
  TypeDestination,
  materials,
  offhandMaterials,
} from "../data/armor";
import { Item } from "prismarine-item";
import { Window } from "prismarine-windows";

export const findItemById = (
  inventory: { slots: readonly Item[] },
  itemId: number
) => inventory.slots.find((item) => item && item.type === itemId);

export const findArmorDestinationIndex = (item: Item) => {
  let index = DESTINATIONS.findIndex((destination) =>
    item.name.endsWith(destination)
  );

  if (index < 0)
    index = offhandMaterials.some((mat) => item.name === mat) ? 4 : -1;

  return index;
};

export const findArmorDestination = (item: Item) => {
  let type = DESTINATIONS.find((destination) =>
    item.name.endsWith(destination)
  );

  if (!type && offhandMaterials.some((mat) => item.name === mat))
    type = "off-hand";

  return type && TypeDestination[type];
};

const getRank = (item: Item): number => {
  const index = materials.findIndex((mat) => item.name.startsWith(mat));
  if (index >= 0) return index;

  return offhandMaterials.findIndex((mat) => item.name === mat);
};

export const isNewArmorBetter = (oldArmor: Item, newArmor: Item): boolean => {
  const oldArmorRank = getRank(oldArmor);
  const newArmorRank = getRank(newArmor);
  return newArmorRank > oldArmorRank;
};

/**
 * Get equipped items(workaround because of https://github.com/PrismarineJS/mineflayer/issues/397)
 */
export const equipped = (
  inventory: Window,
  supportsOffhand: boolean
): readonly Item[] =>
  inventory.slots
    .slice(5, 9)
    .concat(supportsOffhand ? [inventory.slots[45]] : []);
