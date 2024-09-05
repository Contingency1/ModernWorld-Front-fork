'use client';

import * as S from './style';
import INVENTORY from '@/app/api/inventory';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export const GetUserCharacter = ({ userNo }: { userNo: number }) => {
  const [characterName, setCharacterName] = useState<string>('');

  useEffect(() => {
    const getUsersCharacterLocker = async () => {
      const response = await INVENTORY.getUsersCharacterLocker(userNo, true);
      setCharacterName(response.character.image);
    };
    getUsersCharacterLocker();
  }, []);

  return (
    <>
      <S.CharacterImage width={'20%'} height={'20%'}>
        <Image
          alt={'유저의 캐릭터'}
          fill
          sizes={'(max-width : 200px) 100vw'}
          src={characterName || `${process.env.NEXT_PUBLIC_S3}`}
        />
      </S.CharacterImage>
    </>
  );
};
