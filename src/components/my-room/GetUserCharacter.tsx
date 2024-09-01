'use client';

import * as S from './style';
import INVENTORY from '@/app/api/inventory';
import { InventoryItemType } from '@/types/inventory';
import { characterSize } from '@/utils/itemSizeConstains';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const GetUserCharacter = ({ userNo }: { userNo: number }) => {
  const [character, setCharacter] = useState([]);
  const [characterName, setCharacterName] = useState<string>('');

  useEffect(() => {
    const getUserCharacter = async (userNo: number) => {
      const response = await INVENTORY.getInventoryCharacter(userNo);
      setCharacter(response);
    };
    getUserCharacter(userNo);
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
          height={checkCharacter.height}>
          <Image
            alt={'유저의 캐릭터'}
            fill
            sizes={'(max-width : 300px) 100vw'}
            src={
              (
                character.filter(
                  (e: InventoryItemType) => e.status,
                )[0] as InventoryItemType
              )?.character.image || `${process.env.NEXT_PUBLIC_S3}`
            }
          />
        </S.CharacterImage>
      ) : null}
    </>
  );
};
