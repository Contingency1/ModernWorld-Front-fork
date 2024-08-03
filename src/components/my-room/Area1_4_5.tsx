import { itemSize } from '@/utils/itemSizeConstains';
import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';

export const Area1_4_5 = () => {
  return (
    <>
      <S.Place_1_4_5>
        <S.DivElement width="100%" height="50%" id="Place_1">
          <S.ItemImageSize>
            <S.imagetest
              width={itemSize.item1.width}
              height={itemSize.item1.height}
              src={useCheckAreaHook(1)}></S.imagetest>
          </S.ItemImageSize>
        </S.DivElement>
        <S.Place_4_5>
          <S.DivElement width="50%" height="100%" id="Place_4">
            <S.ItemImageSize>
              <S.imagetest
                width={itemSize.item4.width}
                height={itemSize.item4.height}
                src={useCheckAreaHook(4)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement width="50%" height="100%" id="Place_5">
            <S.ItemImageSize>
              <S.imagetest
                width={itemSize.item5.width}
                height={itemSize.item5.height}
                src={useCheckAreaHook(5)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
        </S.Place_4_5>
      </S.Place_1_4_5>
    </>
  );
};
