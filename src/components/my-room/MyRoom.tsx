'use client';

import * as S from './style';
import INVENTORY from '@/app/api/inventory';
import { useEffect, useState } from 'react';

export function MyRoom() {
  const [item, setItem] = useState([]);

  const getUserInventoryStatus = async () => {
    const response = await INVENTORY.getInventoryItem(1, undefined, true);
    setItem(response);
  };

  useEffect(() => {
    getUserInventoryStatus();
  }, []);

  return (
    <>
      {item.map((e) => {
        console.log(e);
      })}
      <S.RootDiv width="100vw" height="100vh">
        <S.BackGroundGrid>
          <S.FloorAndWall color="#b5e4ff" />
          <S.FloorAndWall color="#d5f0ff" />
        </S.BackGroundGrid>
        <S.ItemsGrid>
          <S.DivElement width="100%" height="100%" id="place_2">
            <S.ItemImageSize>2</S.ItemImageSize>
          </S.DivElement>
          <S.Place_1_4_5>
            <S.DivElement width="100%" height="50%" id="Place_1">
              <S.ItemImageSize>1</S.ItemImageSize>
            </S.DivElement>
            <S.Place_4_5>
              <S.DivElement width="50%" height="100%" id="Place_4">
                <S.ItemImageSize>4</S.ItemImageSize>
              </S.DivElement>
              <S.DivElement width="50%" height="100%" id="Place_5">
                <S.ItemImageSize>5</S.ItemImageSize>
              </S.DivElement>
            </S.Place_4_5>
          </S.Place_1_4_5>
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
              <S.ItemImageSize>7</S.ItemImageSize>
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
