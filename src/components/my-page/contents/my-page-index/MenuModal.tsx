'use client';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import * as S from '../my-page-index-modal/style';
import {
  isAlarmModalAtom,
  isLogoutModalAtom,
  isMyPageMenuModalAtom,
  userDataAtom,
} from '@/states/userAtoms';
import LogoutModal from '../my-page-index-modal/LogoutModal';
import AlarmModal from '../my-page-index-modal/AlarmModal';
import { IMAGE } from '@/utils/image';

export default function MenuModal() {
  const setIsMenuModal = useSetAtom(isMyPageMenuModalAtom);
  const [isLogout, setIsLogout] = useAtom(isLogoutModalAtom);
  const [isAlarm, setIsAlarm] = useAtom(isAlarmModalAtom);
  const userData = useAtomValue(userDataAtom);

  const handleLogoutClick = () => {
    setIsLogout(true);
    setIsAlarm(false);
  };

  const handleAlarmClick = () => {
    setIsAlarm(true);
    setIsLogout(false);
  };

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
            <S.ButtonUi $margin="2.5vw 0 1vw 0" onClick={handleAlarmClick}>
              <S.UiImg src={IMAGE.alarm} />
              알람 목록 확인하기
            </S.ButtonUi>
            <S.ButtonUi onClick={handleLogoutClick}>
              <S.UiImg src={IMAGE.logout} />
              로그아웃 하러가기
            </S.ButtonUi>
          </S.DisplayDiv>
        </S.MenuModalBody>
        {isLogout && (
          <LogoutModal
            characterImg={userData.characterLocker[0].character.image}
          />
        )}
        {isAlarm && <AlarmModal />}
      </S.MenuModalBackground>
    </>
  );
}
