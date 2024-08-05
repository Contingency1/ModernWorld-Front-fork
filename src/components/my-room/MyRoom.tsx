'use client';

import * as S from './style';
import { Area1_4_5 } from './Area1_4_5';
import { Area7_8_9 } from './Area7_8_9';
import useCheckAreaHook from './useCheckAreaHook';
import useCheckItemSizeHook from './useCheckItemSizeHook';

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
              <S.ImageSize
                width={useCheckItemSizeHook(2, 'width')}
                height={useCheckItemSizeHook(2, 'height')}
                src={useCheckAreaHook(2)}></S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <Area1_4_5 />
          <S.DivElement width="100%" height="100%" id="place_3">
            <S.ItemImageSize id="place_3" $marginTop="100px">
              <S.ImageSize
                width={useCheckItemSizeHook(3, 'width')}
                height={useCheckItemSizeHook(3, 'height')}
                src={useCheckAreaHook(3)}></S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement id="place_6">
            <S.ItemImageSize>
              <S.ImageSize
                width={useCheckItemSizeHook(6, 'width')}
                height={useCheckItemSizeHook(6, 'height')}
                src={useCheckAreaHook(6)}></S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <Area7_8_9 />
          <S.DivElement id="palce_10">
            <S.ItemImageSize>
              <S.ImageSize
                width={useCheckItemSizeHook(10, 'width')}
                height={useCheckItemSizeHook(10, 'height')}
                src={useCheckAreaHook(10)}></S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
        </S.ItemsGrid>
      </S.MyRoomRootDiv>
    </>
  );
}
