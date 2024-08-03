import { itemSize } from '@/utils/itemSizeConstains';
import { GetUserCharacter } from './GetUserCharacter';
import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';

export const Area7_8_9 = () => {
  return (
    <>
      <S.Place_7_8_9>
        <S.DivElement $marginRight="20%" id="place_7">
          <S.ItemImageSize>
            <S.imagetest
              width={itemSize.item7.width}
              height={itemSize.item7.height}
              src={useCheckAreaHook(7)}></S.imagetest>
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement width="60%" height="60%" id="place_8" $marginTop="50px">
          <S.ItemImageSize>
            <S.imagetest
              width={itemSize.item8.width}
              height={itemSize.item8.height}
              src={useCheckAreaHook(8)}></S.imagetest>
            <GetUserCharacter></GetUserCharacter>
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement $marginLeft="20%" id="place_9">
          <S.ItemImageSize>
            <S.imagetest
              width={itemSize.item9.width}
              height={itemSize.item9.height}
              src={useCheckAreaHook(9)}></S.imagetest>
          </S.ItemImageSize>
        </S.DivElement>
      </S.Place_7_8_9>
    </>
  );
};
