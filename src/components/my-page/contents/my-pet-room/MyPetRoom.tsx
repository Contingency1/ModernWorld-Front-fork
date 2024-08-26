'use client';

import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from './style';
import { useEffect } from 'react';

export default function MyPetRoom() {
  let userNo;
  useEffect(() => {
    const getUserNo = () => {
      if (typeof window !== undefined) {
        const userNo = Number(localStorage.getItem('userNo'));
        return userNo;
      }
    };

    userNo = getUserNo() as number;
  }, []);

  return (
    <>
      <S.MyPetRoomBody>
        <S.RoomBorder>
          <MyRoom width="94%" height="90%" userNo={userNo} />
        </S.RoomBorder>
      </S.MyPetRoomBody>
    </>
  );
}
