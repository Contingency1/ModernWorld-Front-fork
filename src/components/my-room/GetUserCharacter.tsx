'use client';

import * as S from './style';
import INVENTORY from '@/app/api/inventory';
import { InventoryItemType } from '@/types/inventory';
import { useEffect, useState } from 'react';

export const GetUserCharacter = (props: { userNo: number }) => {
  const [character, setCharacter] = useState([]);

  const getUserCharacter = async () => {
    const response = await INVENTORY.getInventoryCharacter(props.userNo);
    setCharacter(response);
  };

  useEffect(() => {
    getUserCharacter();
  }, []);

  return (
    <>
      <S.CharacterImage
        src={
          (
            character.filter(
              (e: InventoryItemType) => e.status,
            )[0] as InventoryItemType
          )?.character.image
        }></S.CharacterImage>
    </>
  );
};
