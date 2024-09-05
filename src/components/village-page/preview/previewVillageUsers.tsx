import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/preview/style';
import GetUserCommentCount from './GetUserCommentCount';
import AddFriend from './AddFriend';
import LikeComponent from './LikeComponent';
import ExitButton from './ExitButton';

export default function PreviewVillageUsers(props: { userNo: number }) {
  return (
    <S.RootDiv>
      <S.ContainerDiv>
        <S.previewRoomDiv>
          <MyRoom width={'75%'} height={'90%'} userNo={props.userNo}></MyRoom>
        </S.previewRoomDiv>
      </S.ContainerDiv>
      <S.previewMenuContainer>
        <S.previewMenuDiv>
          <LikeComponent userNo={props.userNo}></LikeComponent>
          <GetUserCommentCount userNo={props.userNo}></GetUserCommentCount>
          <AddFriend userNo={props.userNo}></AddFriend>
          <ExitButton></ExitButton>
        </S.previewMenuDiv>
      </S.previewMenuContainer>
    </S.RootDiv>
  );
}
