import Image from 'next/image';
import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';
import useCheckItemSizeHook from './useCheckItemSizeHook';

export const Area1_4_5 = (props: { userNo?: number }) => {
  return (
    <>
      <S.Place_1_4_5>
        <S.DivElement width="100%" height="50%" id="Place_1">
          <S.ItemImageSize>
            <S.ImageSize
              width={useCheckItemSizeHook(1, 'width', props.userNo)}
              height={useCheckItemSizeHook(1, 'height', props.userNo)}
              $hasError={useCheckAreaHook(1, props.userNo)}>
              {useCheckAreaHook(1, props.userNo) && (
                <Image
                  src={useCheckAreaHook(1, props.userNo)}
                  fill
                  alt={'1번 가구 이미지'}
                  sizes={'(max-width : 400px) 100vw'}
                />
              )}
            </S.ImageSize>
          </S.ItemImageSize>
        </S.DivElement>
        <S.Place_4_5>
          <S.DivElement width="50%" height="100%" id="Place_4">
            <S.ItemImageSize>
              <S.ImageSize
                width={useCheckItemSizeHook(4, 'width', props.userNo)}
                height={useCheckItemSizeHook(4, 'height', props.userNo)}
                $hasError={useCheckAreaHook(4, props.userNo)}>
                {useCheckAreaHook(4, props.userNo) && (
                  <Image
                    src={useCheckAreaHook(4, props.userNo)}
                    fill
                    alt={'4번 가구 이미지'}
                    sizes={'(max-width : 400px) 100vw'}
                  />
                )}
              </S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement width="50%" height="100%" id="Place_5">
            <S.ItemImageSize>
              <S.ImageSize
                width={useCheckItemSizeHook(5, 'width', props.userNo)}
                height={useCheckItemSizeHook(5, 'height', props.userNo)}
                $hasError={useCheckAreaHook(5, props.userNo)}>
                {useCheckAreaHook(5, props.userNo) && (
                  <Image
                    src={useCheckAreaHook(5, props.userNo)}
                    fill
                    alt={'5번 가구 이미지'}
                    sizes={'(max-width : 400px) 100vw'}
                  />
                )}
              </S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
        </S.Place_4_5>
      </S.Place_1_4_5>
    </>
  );
};
