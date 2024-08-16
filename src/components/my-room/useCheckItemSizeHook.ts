'use client';

import INVENTORY from '@/app/api/inventory';
import { InventoryItemType } from '@/types/inventory';
import { useEffect, useState } from 'react';
import { itemSize } from '@/utils/itemSizeConstains';

export default function useCheckItemSizeHook(
  AreaNumber: number,
  WidthorHeight?: string,
  userNumber?: number,
) {
  const [inventoryItem, setInventoryItem] = useState<[]>([]);

  useEffect(() => {
    const userNo = Number(localStorage.getItem('userNo'));
    const getUserInventoryStatus = async () => {
      const response = await INVENTORY.getInventoryItem(
        userNumber || userNo,
        undefined,
        true,
      );
      setInventoryItem(response);
    };
    getUserInventoryStatus();
  }, []);

  const filteredItem = (
    inventoryItem.filter(
      (e: InventoryItemType) => e.item.type === `${AreaNumber}번 타입`,
    )[0] as InventoryItemType
  )?.item.no;

  if (filteredItem !== undefined) {
    return WidthorHeight === 'width'
      ? itemSize[filteredItem - 1]?.width
      : itemSize[filteredItem - 1]?.height;
  }

  return WidthorHeight === 'width' ? '10%' : '10%';
}
