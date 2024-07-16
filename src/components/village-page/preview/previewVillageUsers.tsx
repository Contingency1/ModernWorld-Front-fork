import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/preview/style';

export default function PreviewVillageUsers() {
  return (
    <S.RootDiv>
      <S.ContainerDiv>
        <S.previewRoomDiv>
          <MyRoom width={'100%'} height={'100%'}></MyRoom>
        </S.previewRoomDiv>
        <S.previewMenu>
          <S.MenuButton>친구 추가</S.MenuButton>
          <S.MenuButton>좋아요 개수</S.MenuButton>
          <S.MenuButton>나가기</S.MenuButton>
        </S.previewMenu>
      </S.ContainerDiv>
    </S.RootDiv>
  );
}
