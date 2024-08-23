'use client';

import USER from '@/app/api/user';
import * as S from '@/components/village-page/comment/styled';

import { useEffect, useState } from 'react';

export const UserName = (props: { userNo: number }) => {
  const [nickname, setNickname] = useState();

  useEffect(() => {
    const getUserNickname = async (userNo: number) => {
      const response = await USER.getUserInfo(userNo);
      return setNickname(response.nickname);
    };
    getUserNickname(props.userNo);
  }, []);

  return <S.UserNameDiv>{nickname}</S.UserNameDiv>;
};
