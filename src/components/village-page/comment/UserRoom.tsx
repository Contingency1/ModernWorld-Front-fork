import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/comment/styled';

export const UserRoom = (props: { userNo: number }) => {
  return (
    <S.UserRoomDiv>
      <MyRoom width="98%" height="95%" userNo={props.userNo}></MyRoom>
    </S.UserRoomDiv>
  );
};
