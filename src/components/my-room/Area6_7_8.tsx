import { GetUserCharacter } from './GetUserCharacter';
import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';

export const Area6_7_8 = () => {
  return (
    <>
      <S.Place_6_7_8>
        <S.DivElement margin_right="20%" id="place_6">
          <S.ItemImageSize>
            <S.imagetest
              width="150px"
              height="150px"
              src={useCheckAreaHook(4)}></S.imagetest>
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement width="60%" height="60%" id="place_7" margin_top="18%">
          <S.ItemImageSize>
            <S.imagetest
              width="200px"
              height="200px"
              src={useCheckAreaHook(2)}></S.imagetest>
            <GetUserCharacter userNo={1}></GetUserCharacter>
          </S.ItemImageSize>
        </S.DivElement>
        <S.DivElement margin_left="20%" id="place_8">
          <S.ItemImageSize>
            <S.imagetest
              width="222px"
              height="222px"
              src={useCheckAreaHook(5)}></S.imagetest>
          </S.ItemImageSize>
        </S.DivElement>
      </S.Place_6_7_8>
    </>
  );
};
