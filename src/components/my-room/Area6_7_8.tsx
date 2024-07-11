import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';

export const Area6_7_8 = () => {
  return (
    <>
      <S.Place_6_7_8>
        <S.DivElement margin_right="20%" id="place_6">
          <S.ItemImageSize>
            <S.imagetest src={useCheckAreaHook(6)}></S.imagetest>
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement width="60%" height="60%" id="place_7" margin_top="18%">
          <S.ItemImageSize>
            <S.imagetest src={useCheckAreaHook(7)}></S.imagetest>
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement margin_left="20%" id="place_8">
          <S.ItemImageSize>
            <S.imagetest src={useCheckAreaHook(8)}></S.imagetest>
          </S.ItemImageSize>
        </S.DivElement>
      </S.Place_6_7_8>
    </>
  );
};
