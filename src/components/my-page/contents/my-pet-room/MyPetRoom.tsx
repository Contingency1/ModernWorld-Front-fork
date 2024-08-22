'use client';

import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from './style';

export default function MyPetRoom() {
  const userNo = Number(localStorage.getItem('userNo'));
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
