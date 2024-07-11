'use client';

import * as S from './style';
import useCheckAreaHook from './useCheckAreaHook';

export const Area1_4_5 = () => {
  return (
    <>
      <S.Place_1_4_5>
        <S.DivElement width="100%" height="50%" id="Place_1">
          <S.ItemImageSize>
            <img src={useCheckAreaHook(2)}></img>
          </S.ItemImageSize>
        </S.DivElement>
        <S.Place_4_5>
          <S.DivElement width="50%" height="100%" id="Place_4">
            <S.ItemImageSize>
              <img src={useCheckAreaHook(4)}></img>
            </S.ItemImageSize>
          </S.DivElement>
          <S.DivElement width="50%" height="100%" id="Place_5">
            <S.ItemImageSize>
              <img src={<img src={useCheckAreaHook(5)}></img>}></img>
            </S.ItemImageSize>
          </S.DivElement>
        </S.Place_4_5>
      </S.Place_1_4_5>
    </>
  );
};
