'use client';

import * as S from './style';
import { Area1_4_5 } from './Area1_4_5';
import { Area7_8_9 } from './Area7_8_9';
import useCheckAreaHook from './useCheckAreaHook';
import useCheckItemSizeHook from './useCheckItemSizeHook';
import Image from 'next/image';

export function MyRoom(props: {
  width: string;
  height: string;
  userNo?: number;
}) {
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
                width={useCheckItemSizeHook(2, 'width', props.userNo)}
                height={useCheckItemSizeHook(2, 'height', props.userNo)}
                $hasError={useCheckAreaHook(2, props.userNo)}>
                {useCheckAreaHook(2, props.userNo) && (
                  <Image
                    src={useCheckAreaHook(2, props.userNo)}
                    fill
                    alt={'2번 가구 이미지'}
                    sizes={'(max-width : 400px) 100vw'}
                  />
                )}
              </S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <Area1_4_5 userNo={props.userNo} />
          <S.DivElement width="100%" height="100%" id="place_3">
            <S.ItemImageSize id="place_3" $marginTop="100px">
              <S.ImageSize
                width={useCheckItemSizeHook(3, 'width', props.userNo)}
                height={useCheckItemSizeHook(3, 'height', props.userNo)}
                $hasError={useCheckAreaHook(3, props.userNo)}>
                {useCheckAreaHook(3, props.userNo) && (
                  <Image
                    src={useCheckAreaHook(3, props.userNo)}
                    fill
                    alt={'3번 가구 이미지'}
                    sizes={'(max-width : 400px) 100vw'}
                  />
                )}
              </S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement id="place_6">
            <S.ItemImageSize>
              <S.ImageSize
                width={useCheckItemSizeHook(6, 'width', props.userNo)}
                height={useCheckItemSizeHook(6, 'height', props.userNo)}
                $hasError={useCheckAreaHook(6, props.userNo)}>
                {useCheckAreaHook(6, props.userNo) && (
                  <Image
                    src={useCheckAreaHook(6, props.userNo)}
                    fill
                    alt={'6번 가구 이미지'}
                    sizes={'(max-width : 400px) 100vw'}
                  />
                )}
              </S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <Area7_8_9 userNo={props.userNo} />
          <S.DivElement id="palce_10">
            <S.ItemImageSize>
              <S.ImageSize
                width={useCheckItemSizeHook(10, 'width', props.userNo)}
                height={useCheckItemSizeHook(10, 'height', props.userNo)}
                $hasError={useCheckAreaHook(10, props.userNo)}>
                {useCheckAreaHook(10, props.userNo) && (
                  <Image
                    src={useCheckAreaHook(10, props.userNo)}
                    fill
                    alt={'10번 가구 이미지'}
                    sizes={'(max-width : 400px) 100vw'}
                  />
                )}
              </S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
        </S.ItemsGrid>
      </S.MyRoomRootDiv>
    </>
  );
}
