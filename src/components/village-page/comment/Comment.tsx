import * as S from '@/components/village-page/comment/styled';
import { PostComment } from './PostComment';
import { ShowCommentList } from './ShowCommenetList';
import { UserName } from './UserName';
import { UserRoom } from './UserRoom';
import { RedirectPrevPage } from './RedirectPrevPage';

export const Comment = () => {
  return (
    <S.CommentContainer>
      <S.RootDiv>
        <RedirectPrevPage />
        <UserName />
        <UserRoom></UserRoom>
        <PostComment />
        <ShowCommentList />
      </S.RootDiv>
    </S.CommentContainer>
  );
};
