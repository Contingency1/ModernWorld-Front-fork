'use client';

import { useAtom, useAtomValue } from 'jotai';
import * as S from './style';
import { isMyPageMenuModalAtom, userDataAtom } from '@/states/userAtoms';
import { useState } from 'react';

export default function MenuModal() {
  const [isMenuModal, setIsMenuModal] = useAtom(isMyPageMenuModalAtom);
  const [isLogout, setIsLogout] = useState(false);
  const [isAlarm, setIsAlarm] = useState(false);
  const userData = useAtomValue(userDataAtom);
  return (
    <>
      <S.MenuModalBackground>
        <S.MenuModalBody>
          <S.DisplayDiv $justifyContent="end">
            <S.Font
              $fontSize="2vw"
              color="#7F7F7F"
              $margin="0.5vw 1vw 0 0"
              cursor="pointer"
              onClick={() => setIsMenuModal(false)}>
              x
            </S.Font>
          </S.DisplayDiv>
          <S.DisplayDiv
            $justifyContent="center"
            $alignItems="center"
            $flexDirection="column">
            <S.UserImg src={userData.image} />
            <S.ButtonUi
              $margin="2.5vw 0 1vw 0"
              onClick={() => setIsAlarm(!isAlarm)}>
              <S.UiImg src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/alarm.png" />
              알람 목록 확인하기
            </S.ButtonUi>
            <S.ButtonUi onClick={() => setIsLogout(!isLogout)}>
              <S.UiImg src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/logout.png" />
              로그아웃 하러가기
            </S.ButtonUi>
          </S.DisplayDiv>
        </S.MenuModalBody>
        {isLogout ? (
          <>
            <S.MenuModalBody $margin="0 0 0 1vw">
              <S.DisplayDiv
                $justifyContent="center"
                $alignItems="center"
                $flexDirection="column">
                <S.ButtonUi
                  $defaultOpacity="1"
                  $margin="1.5vw 0 0 0"
                  $cursor="default">
                  <S.UiImg src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/logout.png" />
                  로그아웃 하러가기
                </S.ButtonUi>
                <S.ContentContainer>
                  <S.Img
                    src={userData.characterLocker[0].character.image}
                    width="5vw"
                  />
                  <S.Font
                    color="#FF6767"
                    $fontSize="14px"
                    $margin="1vw 0 1.5vw 0">
                    진짜... 가실 거예요...?
                  </S.Font>
                  <S.LogoutButtonUi $margin="0 0 1vw 0" $backColor="#fff">
                    아니! 절대 안 가지.
                  </S.LogoutButtonUi>
                  <S.LogoutButtonUi $backColor="#EFEFEF">
                    응! 다음에 다시 올게~
                  </S.LogoutButtonUi>
                </S.ContentContainer>
              </S.DisplayDiv>
            </S.MenuModalBody>
          </>
        ) : (
          <></>
        )}
      </S.MenuModalBackground>
    </>
  );
}
