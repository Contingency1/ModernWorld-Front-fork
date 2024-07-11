'use client';

import * as S from './style';
import INVENTORY from '@/app/api/inventory';
import USER from '@/app/api/user';
import { useEffect, useState } from 'react';
import { Area1_4_5 } from './Area1_4_5';
import { Area6_7_8 } from './Area6_7_8';
import useCheckAreaHook from './useCheckAreaHook';

export function MyRoom() {
  const [user, setUser] = useState([]);

  const getUserCurrentCharacter = async () => {
    const response = await USER.getUserInfo(1);
    setUser(response);
  };

  useEffect(() => {
    getUserCurrentCharacter();
  }, []);

  return (
    <>
      <S.RootDiv width="100vw" height="100vh">
        <S.BackGroundGrid>
          <S.FloorAndWall color="#b5e4ff" />
          <S.FloorAndWall color="#d5f0ff" />
        </S.BackGroundGrid>
        <S.ItemsGrid>
          <S.DivElement width="100%" height="100%" id="place_2">
            <S.ItemImageSize>
              <S.imagetest src={useCheckAreaHook(2)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <Area1_4_5 />
          <S.DivElement width="100%" height="100%" id="place_3">
            <S.ItemImageSize>
              <S.imagetest src={useCheckAreaHook(3)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement id="place_9">
            <S.ItemImageSize>
              <S.imagetest src={useCheckAreaHook(9)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <Area6_7_8 />
          <S.DivElement id="palce_10">
            <S.ItemImageSize>
              <S.imagetest src={useCheckAreaHook(11)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
        </S.ItemsGrid>
      </S.RootDiv>
    </>
  );
}
