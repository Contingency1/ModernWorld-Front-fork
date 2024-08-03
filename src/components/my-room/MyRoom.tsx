'use client';

import * as S from './style';
import { Area1_4_5 } from './Area1_4_5';
import { Area7_8_9 } from './Area7_8_9';
import useCheckAreaHook from './useCheckAreaHook';
import { itemSize } from '@/utils/itemSizeConstains';

export function MyRoom(props: { width: string; height: string }) {
  return (
    <>
      <S.MyRoomRootDiv width={props.width} height={props.height}>
        <S.BackGroundGrid>
          <S.FloorAndWall color="#b5e4ff" $border="30px 30px 0px 0px" />
          <S.FloorAndWall color="#d5f0ff" $border="0px 0px 30px 30px" />
        </S.BackGroundGrid>
        <S.ItemsGrid>
          <S.DivElement width="100%" height="100%" id="place_2">
            <S.ItemImageSize id="place_2" $marginTop="100px">
              <S.imagetest
                width={itemSize.item1.width}
                height={itemSize.item1.height}
                src={useCheckAreaHook(2)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <Area1_4_5 />
          <S.DivElement width="100%" height="100%" id="place_3">
            <S.ItemImageSize id="place_3" $marginTop="100px">
              <S.imagetest
                width={itemSize.item3.width}
                height={itemSize.item3.height}
                src={useCheckAreaHook(3)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement id="place_6">
            <S.ItemImageSize>
              <S.imagetest
                width={itemSize.item6.width}
                height={itemSize.item6.height}
                src={useCheckAreaHook(6)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <Area7_8_9 />
          <S.DivElement id="palce_10">
            <S.ItemImageSize>
              <S.imagetest
                width={itemSize.item10.width}
                height={itemSize.item10.width}
                src={useCheckAreaHook(10)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
        </S.ItemsGrid>
      </S.MyRoomRootDiv>
    </>
  );
}
