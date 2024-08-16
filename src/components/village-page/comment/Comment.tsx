import { COMMENT } from '@/app/api/comment';
import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/comment/styled';
import { PostComment } from './PostComment';
import { ShowCommentList } from './ShowCommenetList';

export const Comment = () => {
  return (
    <S.CommentContainer>
      <S.RootDiv>
        <S.ExistButton
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png'
          }></S.ExistButton>
        <S.UserName>기무라의 방</S.UserName>
        <S.UserRoomDiv>
          <MyRoom width="98%" height="95%"></MyRoom>
        </S.UserRoomDiv>
        <PostComment />
        <ShowCommentList />
      </S.RootDiv>
    </S.CommentContainer>
  );
};
