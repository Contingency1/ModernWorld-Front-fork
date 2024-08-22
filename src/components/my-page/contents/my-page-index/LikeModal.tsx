'use client';

import { useAtom, useAtomValue } from 'jotai';
import * as S from '../my-page-index-modal/style';
import { isLikeModalAtom, userDataAtom } from '@/states/userAtoms';
import { useState } from 'react';

export default function LikeModal() {
  const [isLikeModal, setIsLikeModal] = useAtom(isLikeModalAtom);
  const [viewType, setViewType] = useState<'receiver' | 'sender'>('receiver');

  return (
    <>
      <S.MenuModalBackground>
        <S.MenuModalBody width="30vw">
          <S.DisplayDiv $justifyContent="end">
            <S.Font
              $fontSize="1.5vw"
              color="#7F7F7F"
              $margin="0.8vw 1vw 0 0"
              cursor="pointer"
              onClick={() => setIsLikeModal(false)}>
              x
            </S.Font>
          </S.DisplayDiv>
          <S.DisplayDiv
            $justifyContent="center"
            $alignItems="center"
            $margin="0.8vw 0 1.5vw 0">
            <S.Font
              color="#454545"
              $fontSize="18px"
              $margin="0 3.2vw 0 0"
              cursor="pointer"
              onClick={() => setViewType('receiver')}>
              받은 좋아요 (30)
            </S.Font>
            <S.Font
              color="#454545"
              $fontSize="18px"
              cursor="pointer"
              onClick={() => setViewType('sender')}>
              보낸 좋아요 (30)
            </S.Font>
          </S.DisplayDiv>
          <S.Hr $margin={viewType} />
          <S.DisplayDiv $justifyContent="center" $alignItems="center">
            <S.LikeListSection>
              <S.LikeListContainer>
                <S.UserImg
                  src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EC%BA%90%EB%A6%AD%ED%84%B0%EB%AA%A8%EC%9D%8C/cat2.svg"
                  width="3vw"
                  $margin="0 0 0 1.1  vw"
                  $border="2px solid #fff"></S.UserImg>
                <S.Img
                  width="1vw"
                  $margin="0 0.5vw 0 1vw"
                  src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png"
                  alt=""
                />
                <S.Font $fontSize="12px" color="#454545" width="13vw">
                  재재ㅐㅈ재재ㅐㅈ진 님께 좋아요를 눌렀습니다.
                </S.Font>
                <S.GoToRoomButton>방 보러가기</S.GoToRoomButton>
              </S.LikeListContainer>
            </S.LikeListSection>
          </S.DisplayDiv>
        </S.MenuModalBody>
      </S.MenuModalBackground>
    </>
  );
}
