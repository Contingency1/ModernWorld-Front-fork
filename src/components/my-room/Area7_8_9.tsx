import Image from 'next/image';
import { GetUserCharacter } from './GetUserCharacter';
import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';
import useCheckItemSizeHook from './useCheckItemSizeHook';

export const Area7_8_9 = (props: { userNo?: number }) => {
  return (
    <>
      <S.Place_7_8_9>
        <S.DivElement $marginRight="20%" id="place_7">
          <S.ItemImageSize>
            <S.ImageSize
              width={useCheckItemSizeHook(7, 'width', props.userNo)}
              height={useCheckItemSizeHook(7, 'height', props.userNo)}
              $hasError={useCheckAreaHook(7, props.userNo)}>
              {useCheckAreaHook(7, props.userNo) && (
                <Image
                  src={useCheckAreaHook(7, props.userNo)}
                  fill
                  alt={'7번 가구 이미지'}
                  sizes={'(max-width : 400px) 100vw'}
                />
              )}
            </S.ImageSize>
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement width="60%" height="60%" id="place_8" $marginTop="75px">
          <S.ItemImageSize>
            <S.ImageSize
              width={useCheckItemSizeHook(8, 'width', props.userNo)}
              height={useCheckItemSizeHook(8, 'height', props.userNo)}
              $hasError={useCheckAreaHook(8, props.userNo)}
              $bottom={'5%'}>
              {useCheckAreaHook(8, props.userNo) && (
                <Image
                  src={useCheckAreaHook(8, props.userNo)}
                  fill
                  alt={'8번 가구 이미지'}
                  sizes={'(max-width : 400px) 100vw'}
                />
              )}
            </S.ImageSize>
            <GetUserCharacter userNo={Number(props.userNo)} />
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement $marginLeft="20%" id="place_9">
          <S.ItemImageSize>
            <S.ImageSize
              width={useCheckItemSizeHook(9, 'width', props.userNo)}
              height={useCheckItemSizeHook(9, 'height', props.userNo)}
              $hasError={useCheckAreaHook(9, props.userNo)}>
              {useCheckAreaHook(9, props.userNo) && (
                <Image
                  src={useCheckAreaHook(9, props.userNo)}
                  fill
                  alt={'9번 가구 이미지'}
                  sizes={'(max-width : 400px) 100vw'}
                />
              )}
            </S.ImageSize>
          </S.ItemImageSize>
        </S.DivElement>
      </S.Place_7_8_9>
    </>
  );
};
