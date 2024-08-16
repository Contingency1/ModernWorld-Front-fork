import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/comment/styled';
import { PostComment } from './PostComment';
import { ShowCommentList } from './ShowCommenetList';
import Link from 'next/link';

export const Comment = () => {
  return (
    <S.CommentContainer>
      <S.RootDiv>
        <Link href="/previewVillageUsers">
          <S.ExistButton
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png'
            }></S.ExistButton>
        </Link>
        <S.UserNameDiv>dkdk</S.UserNameDiv>
        <S.UserRoomDiv>
          <MyRoom width="98%" height="95%"></MyRoom>
        </S.UserRoomDiv>
        <PostComment />
        <ShowCommentList />
      </S.RootDiv>
    </S.CommentContainer>
  );
};
