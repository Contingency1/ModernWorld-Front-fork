import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';
import useCheckItemSizeHook from './useCheckItemSizeHook';

export const Area1_4_5 = () => {
  return (
    <>
      <S.Place_1_4_5>
        <S.DivElement width="100%" height="50%" id="Place_1">
          <S.ItemImageSize>
            <S.ImageSize
              width={useCheckItemSizeHook(1, 'width')}
              height={useCheckItemSizeHook(1, 'height')}
              src={useCheckAreaHook(1)}></S.ImageSize>
          </S.ItemImageSize>
        </S.DivElement>
        <S.Place_4_5>
          <S.DivElement width="50%" height="100%" id="Place_4">
            <S.ItemImageSize>
              <S.ImageSize
                width={useCheckItemSizeHook(4, 'width')}
                height={useCheckItemSizeHook(4, 'height')}
                src={useCheckAreaHook(4)}></S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement width="50%" height="100%" id="Place_5">
            <S.ItemImageSize>
              <S.ImageSize
                width={useCheckItemSizeHook(5, 'width')}
                height={useCheckItemSizeHook(5, 'height')}
                src={useCheckAreaHook(5)}></S.ImageSize>
            </S.ItemImageSize>
          </S.DivElement>
        </S.Place_4_5>
      </S.Place_1_4_5>
    </>
  );
};
