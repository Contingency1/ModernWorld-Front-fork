'use client';

import * as S from './style';
import INVENTORY from '@/app/api/inventory';
import USER from '@/app/api/user';
import { useEffect, useState } from 'react';
import { Area1_4_5 } from './Area1_4_5';

export function MyRoom() {
  const [item, setItem] = useState([]);
  const [user, setUser] = useState([]);

  const getUserInventoryStatus = async () => {
    const response = await INVENTORY.getInventoryItem(1, undefined, true);
    setItem(response);
  };

  const getUserCurrentCharacter = async () => {
    const response = await USER.getUserInfo(1);
    setUser(response);
  };

  useEffect(() => {
    getUserInventoryStatus();
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
          <Area1_4_5 />
          <S.DivElement width="100%" height="100%" id="place_2">
            <S.ItemImageSize></S.ItemImageSize>
          </S.DivElement>
          <S.DivElement width="100%" height="100%" id="place_3">
            <S.ItemImageSize>3</S.ItemImageSize>
          </S.DivElement>
          <S.DivElement id="place_9">
            <S.ItemImageSize>9</S.ItemImageSize>
          </S.DivElement>
          <S.Place_6_7_8>
            <S.DivElement margin_right="20%" id="place_6">
              <S.ItemImageSize>6</S.ItemImageSize>
            </S.DivElement>
            <S.DivElement
              width="60%"
              height="60%"
              id="place_7"
              margin_top="18%">
              <S.ItemImageSize></S.ItemImageSize>
            </S.DivElement>
            <S.DivElement margin_left="20%" id="place_8">
              <S.ItemImageSize>8</S.ItemImageSize>
            </S.DivElement>
          </S.Place_6_7_8>
          <S.DivElement id="palce_10">
            <S.ItemImageSize>10</S.ItemImageSize>
          </S.DivElement>
        </S.ItemsGrid>
      </S.RootDiv>
    </>
  );
}
