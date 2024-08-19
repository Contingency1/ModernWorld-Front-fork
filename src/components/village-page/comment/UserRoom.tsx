'use client';

import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/comment/styled';
import { UserSelectedAtom } from '@/states/village';
import { useAtom } from 'jotai';

export const UserRoom = () => {
  const [userSelected] = useAtom(UserSelectedAtom);
  return (
    <S.UserRoomDiv>
      <MyRoom width="98%" height="95%" userNo={Number(userSelected)}></MyRoom>
    </S.UserRoomDiv>
  );
};
