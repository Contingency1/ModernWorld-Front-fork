import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';

export const Area1_4_5 = () => {
  return (
    <>
      <S.Place_1_4_5>
        <S.DivElement width="100%" height="50%" id="Place_1">
          <S.ItemImageSize>
            <S.imagetest
              width="150px"
              height="150px"
              src={useCheckAreaHook(1)}></S.imagetest>
          </S.ItemImageSize>
        </S.DivElement>
        <S.Place_4_5>
          <S.DivElement width="50%" height="100%" id="Place_4">
            <S.ItemImageSize>
              <S.imagetest
                width="170px"
                height="170px"
                src={useCheckAreaHook(8)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement width="50%" height="100%" id="Place_5">
            <S.ItemImageSize>
              <S.imagetest
                width="176px"
                height="170px"
                src={useCheckAreaHook(8)}></S.imagetest>
            </S.ItemImageSize>
          </S.DivElement>
        </S.Place_4_5>
      </S.Place_1_4_5>
    </>
  );
};
