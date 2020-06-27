import { TypeDestination } from '../data/armor';
import MinecraftData from 'minecraft-data';
import { IndexedData } from '../types';

const armorTypes = Object.keys(TypeDestination);

export const isArmor = (itemId: number, versionData: IndexedData): boolean => {
  const item = versionData.findItemOrBlockById(itemId)

  return item && armorTypes.some(type => item.name.endsWith(type));
};
