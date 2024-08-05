import { GetUserCharacter } from './GetUserCharacter';
import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';
import useCheckItemSizeHook from './useCheckItemSizeHook';

export const Area7_8_9 = () => {
  return (
    <>
      <S.Place_7_8_9>
        <S.DivElement $marginRight="20%" id="place_7">
          <S.ItemImageSize>
            <S.ImageSize
              width={useCheckItemSizeHook(7, 'width')}
              height={useCheckItemSizeHook(7, 'height')}
              src={useCheckAreaHook(7)}></S.ImageSize>
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement width="60%" height="60%" id="place_8" $marginTop="100px">
          <S.ItemImageSize>
            <S.ImageSize
              width={useCheckItemSizeHook(8, 'width')}
              height={useCheckItemSizeHook(8, 'height')}
              src={useCheckAreaHook(8)}></S.ImageSize>
            <GetUserCharacter></GetUserCharacter>
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement $marginLeft="20%" id="place_9">
          <S.ItemImageSize>
            <S.ImageSize
              width={useCheckItemSizeHook(9, 'width')}
              height={useCheckItemSizeHook(9, 'height')}
              src={useCheckAreaHook(9)}></S.ImageSize>
          </S.ItemImageSize>
        </S.DivElement>
      </S.Place_7_8_9>
    </>
  );
};
