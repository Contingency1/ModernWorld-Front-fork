'use client';

import INVENTORY from '@/app/api/inventory';
import { InventoryItemType } from '@/types/inventory';
import { useEffect, useState } from 'react';

export default function useCheckAreaHook(AreaNumber: number) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const userNo = Number(localStorage.getItem('userNo'));
    const getUserInventoryStatus = async () => {
      const response = await INVENTORY.getInventoryItem(
        userNo,
        undefined,
        true,
      );
      setItem(response);
    };
    getUserInventoryStatus();
  }, []);

  return (
    item.filter(
      (e: InventoryItemType) => e.item.type === `${AreaNumber}번 타입`,
    )[0] as InventoryItemType
  )?.item.image;
}
