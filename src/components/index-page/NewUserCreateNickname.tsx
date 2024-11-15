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
      const responseName = await USER.createNickname(newUserNickname);
      console.log(responseName);
      if (responseName.status === 201) {
        const responseCharacter = await USER.createCharacter(newUserCharacter);
        console.log(responseCharacter);
        if (responseCharacter.status === 201) {
          alert('회원가입 성공!!');
          route.push('my-page');
        }
      }
    } catch (err) {
      alert('회원가입 실패');
    }
  };
  return (
    <>
      <S.startButton onClick={() => getCreateUserApi()}>시작하기</S.startButton>
    </>
  );
};
