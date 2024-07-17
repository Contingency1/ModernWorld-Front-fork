'use client';

import * as S from './style';
import { Area1_4_5 } from './Area1_4_5';
import { Area6_7_8 } from './Area6_7_8';
import useCheckAreaHook from './useCheckAreaHook';

export function MyRoom(props: {
  width: string;
  height: string;
  border: string;
}) {
  return (
    <>
      <S.MyRoomRootDiv width={props.width} height={props.height}>
        <S.BackGroundGrid>
          <S.FloorAndWall color="#b5e4ff" border="30px 30px 0px 0px" />
          <S.FloorAndWall color="#d5f0ff" border="0px 0px 30px 30px" />
        </S.BackGroundGrid>
        <S.ItemsGrid>
          <S.DivElement width="100%" height="100%" id="place_2">
            <S.ItemImageSize id="place_2" margin_top="35%">
              <S.imagetest
                width="350px"
                height="350px"
                src={useCheckAreaHook(7)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <Area1_4_5 />
          <S.DivElement width="100%" height="100%" id="place_3">
            <S.ItemImageSize id="place_3" margin_top="35%">
              <S.imagetest
                width="350px"
                height="350px"
                src={useCheckAreaHook(7)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement id="place_9">
            <S.ItemImageSize>
              <S.imagetest
                width="250px"
                height="200px"
                src={useCheckAreaHook(9)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <Area6_7_8 />
          <S.DivElement id="palce_10">
            <S.ItemImageSize>
              <S.imagetest
                width="200px"
                height="200px"
                src={useCheckAreaHook(10)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
        </S.ItemsGrid>
      </S.MyRoomRootDiv>
    </>
  );
}
