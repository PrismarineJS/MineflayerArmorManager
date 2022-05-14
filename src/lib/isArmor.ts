import { TypeDestination, offhandMaterials } from "../data/armor";
import { Item } from "prismarine-item";
import { IndexedData } from "../types";

const armorTypes = Object.keys(TypeDestination);

export const isArmor = (item: Item): boolean => {
  return item && (armorTypes.some((type) => item.name.endsWith(type))
                || offhandMaterials.some((type) => item.name === type));
};
