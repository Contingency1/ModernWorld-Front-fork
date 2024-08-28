'use client';

import USER from '@/app/api/user';
import * as S from './style';
import {
  newUserCharacterAtom,
  newUserNicknameAtom,
} from '@/states/newUserNickname';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';

export const NewUserCreateNewname = () => {
  const [newUserNickname] = useAtom(newUserNicknameAtom);
  const [newUserCharacter] = useAtom(newUserCharacterAtom);
  const route = useRouter();

  const getCreateUserApi = async () => {
    try {
      await USER.createNickname(newUserNickname);
      try {
        await USER.createCharacter(newUserCharacter);
      } catch (err) {
        alert('캐릭터 생성 실패');
      }
      route.push('my-page');
    } catch (err) {
      alert('닉네임 생성 실패');
    }
  };
  return (
    <>
      <S.startButton onClick={() => getCreateUserApi()}>시작하기</S.startButton>
    </>
  );
};
