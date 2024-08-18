'use client';

import USER from '@/app/api/user';
import * as S from '@/components/village-page/comment/styled';
import { UserSelectedAtom } from '@/states/village';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

export const UserName = () => {
  const [nickname, setNickname] = useState();
  const [userSelected] = useAtom(UserSelectedAtom);

  useEffect(() => {
    const getUserNickname = async (userNo: number) => {
      const response = await USER.getUserInfo(userNo);
      return setNickname(response.nickname);
    };
    getUserNickname(Number(userSelected));
  }, []);

  return <S.UserNameDiv>{nickname}</S.UserNameDiv>;
};
