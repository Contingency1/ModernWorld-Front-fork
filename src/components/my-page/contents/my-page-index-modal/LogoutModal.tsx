'use client';
import { useSetAtom } from 'jotai';
import * as S from './style';
import { isLogoutModalAtom } from '@/states/userAtoms';

export default function LogoutModal(props: { characterImg: string }) {
  const setIsLogoutModal = useSetAtom(isLogoutModalAtom);
  return (
    <>
      <S.MenuModalBody $margin="0 0 0 1vw">
        <S.RightModalExit onClick={() => setIsLogoutModal(false)}>
          x
        </S.RightModalExit>
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
            <S.Img src={props.characterImg} width="5vw" />
            <S.Font color="#FF6767" $fontSize="14px" $margin="1vw 0 1.5vw 0">
              진짜... 가실 거예요...?
            </S.Font>
            <S.LogoutButtonUi
              $margin="0 0 1vw 0"
              $backColor="#fff"
              onClick={() => {
                alert('고마워요!');
                setIsLogoutModal(false);
              }}>
              아니! 절대 안 가지.
            </S.LogoutButtonUi>
            <S.LogoutButtonUi $backColor="#EFEFEF">
              응! 다음에 다시 올게~
            </S.LogoutButtonUi>
          </S.ContentContainer>
        </S.DisplayDiv>
      </S.MenuModalBody>
    </>
  );
}
