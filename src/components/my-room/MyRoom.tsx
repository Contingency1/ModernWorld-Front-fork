'use client';

import * as S from './style';
import { Area1_4_5 } from './Area1_4_5';
import { Area7_8_9 } from './Area7_8_9';
import useCheckAreaHook from './useCheckAreaHook';
import useCheckItemSizeHook from './useCheckItemSizeHook';
import Image from 'next/image';
import { IMAGE } from '@/utils/image';

export function MyRoom(props: {
  width: string;
  height: string;
  userNo?: number;
}) {
  return (
    <>
      <S.MyRoomRootDiv width={props.width} height={props.height}>
        <S.ItemsGrid>
          <S.DivElement width="100%" height="100%" id="place_2">
            <S.ItemImageSize id="place_2" $marginTop="100px">
              <S.ImageSize
                width={useCheckItemSizeHook(2, 'width', props.userNo)}
                height={useCheckItemSizeHook(2, 'height', props.userNo)}
                $hasError={useCheckAreaHook(2, props.userNo)}
                $bottom="12%">
                <Image
                  src={
                    useCheckAreaHook(2, props.userNo) ||
                    `${process.env.NEXT_PUBLIC_S3}`
                  }
                  fill
                  alt={'2번 가구 이미지'}
                  sizes={'(max-width : 400px) 100vw'}
                />
              </S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <Area1_4_5 userNo={props.userNo} />
          <S.DivElement width="100%" height="100%" id="place_3">
            <S.ItemImageSize id="place_3" $marginTop="100px">
              <S.ImageSize
                width={useCheckItemSizeHook(3, 'width', props.userNo)}
                height={useCheckItemSizeHook(3, 'height', props.userNo)}
                $hasError={useCheckAreaHook(3, props.userNo)}
                $bottom="-4%">
                <Image
                  src={
                    useCheckAreaHook(3, props.userNo) ||
                    `${process.env.NEXT_PUBLIC_S3}`
                  }
                  fill
                  alt={'3번 가구 이미지'}
                  sizes={'(max-width : 400px) 100vw'}
                />
              </S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement id="place_6">
            <S.ItemImageSize>
              <S.ImageSize
                width={useCheckItemSizeHook(6, 'width', props.userNo)}
                height={useCheckItemSizeHook(6, 'height', props.userNo)}
                $hasError={useCheckAreaHook(6, props.userNo)}>
                <Image
                  src={
                    useCheckAreaHook(6, props.userNo) ||
                    `${process.env.NEXT_PUBLIC_S3}`
                  }
                  fill
                  alt={'6번 가구 이미지'}
                  sizes={'(max-width : 400px) 100vw'}
                />
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
                <Image
                  src={
                    useCheckAreaHook(10, props.userNo) ||
                    `${process.env.NEXT_PUBLIC_S3}`
                  }
                  fill
                  alt={'10번 가구 이미지'}
                  sizes={'(max-width : 400px) 100vw'}
                />
              </S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
        </S.ItemsGrid>
      </S.MyRoomRootDiv>
    </>
  );
}
