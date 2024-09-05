import * as S from '@/components/village-page/comment/styled';
import { PostComment } from './PostComment';
import { ShowCommentList } from './ShowCommenetList';
import { UserName } from './UserName';
import { UserRoom } from './UserRoom';
import { RedirectPrevPage } from './RedirectPrevPage';

export const Comment = (props: { userNo: number }) => {
  return (
    <S.CommentContainer>
      <S.RootDiv>
        <RedirectPrevPage userNo={props.userNo} />
        <UserName userNo={props.userNo} />
        <S.UserRoomDiv>
          <UserRoom userNo={props.userNo}></UserRoom>
        </S.UserRoomDiv>
        <PostComment userNo={props.userNo} />
        <ShowCommentList userNo={props.userNo} />
      </S.RootDiv>
    </S.CommentContainer>
  );
};
