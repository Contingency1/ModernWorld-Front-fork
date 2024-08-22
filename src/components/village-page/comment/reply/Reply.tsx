import * as S from '@/components/village-page/comment/reply/styled';
import { ReplyModalHeader } from './ReplyModalHeader';
import { ReplyModalBody } from './ReplyModalBody';
import { PostReply } from './PostReply';

const Reply = () => {
  return (
    <>
      <S.PageDarkDiv>
        <S.ModalContainer>
          <S.ModalDiv>
            <ReplyModalHeader />
            <PostReply />
            <ReplyModalBody />
          </S.ModalDiv>
        </S.ModalContainer>
      </S.PageDarkDiv>
    </>
  );
};

export default Reply;
