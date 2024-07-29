'use client';

import USER from '@/app/api/user';
import * as S from './style';
import {
  newUserCharacterAtom,
  newUserNicknameAtom,
} from '@/states/newUserNickname';
import { useAtom } from 'jotai';

export const NewUserCreateNewname = () => {
  const [newUserNickname] = useAtom(newUserNicknameAtom);
  const [newUserCharacter] = useAtom(newUserCharacterAtom);

  const getCreateUserApi = async () => {
    await USER.createNickname(newUserNickname);
    await USER.createCharacter(newUserCharacter);
  };
  return (
    <>
      <S.startButton href="/my-page" onClick={() => getCreateUserApi()}>
        시작하기
      </S.startButton>
    </>
  );
};
