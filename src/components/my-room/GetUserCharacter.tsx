'use client';

import * as S from './style';
import INVENTORY from '@/app/api/inventory';
import { InventoryItemType } from '@/types/inventory';
import { characterSize } from '@/utils/itemSizeConstains';
import { useEffect, useState } from 'react';

export const GetUserCharacter = () => {
  const [character, setCharacter] = useState([]);
  const [characterName, setCharacterName] = useState<string>('');

  useEffect(() => {
    const userNo: number = Number(localStorage.getItem('userNo'));
    const getUserCharacter = async () => {
      const response = await INVENTORY.getInventoryCharacter(userNo);
      setCharacter(response);
    };
    getUserCharacter();
    const getUsersCharacterLocker = async () => {
      const response = await INVENTORY.getUsersCharacterLocker(userNo);
      setCharacterName(response.character.name);
    };
    getUsersCharacterLocker();
  }, []);

  const checkCharacter = characterSize.filter(
    (e) => e.characterName === characterName,
  )[0];

  return (
    <>
      {checkCharacter ? (
        <S.CharacterImage
          width={checkCharacter.width}
          height={checkCharacter.height}
          src={
            (
              character.filter(
                (e: InventoryItemType) => e.status,
              )[0] as InventoryItemType
            )?.character.image
          }></S.CharacterImage>
      ) : null}
    </>
  );
};
