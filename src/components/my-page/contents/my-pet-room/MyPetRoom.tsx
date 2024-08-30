'use client';

import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from './style';
import { useEffect, useState } from 'react';

export default function MyPetRoom() {
  const [userNo, setUserNo] = useState<number | null>(null);
  useEffect(() => {
    const getUserNo = () => {
      if (typeof window !== undefined) {
        const userNumber = Number(localStorage.getItem('userNo'));
        setUserNo(userNumber);
      }
    };
    getUserNo();
  }, []);

  return (
    <>
      <S.MyPetRoomBody>
        <S.RoomBorder>
          {userNo !== null && (
            <MyRoom width="94%" height="90%" userNo={userNo} />
          )}
        </S.RoomBorder>
      </S.MyPetRoomBody>
    </>
  );
}
