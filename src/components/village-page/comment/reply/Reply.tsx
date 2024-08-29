import * as S from '@/components/village-page/comment/reply/styled';
import { ReplyModalHeader } from './ReplyModalHeader';
import { ReplyModalBody } from './ReplyModalBody';
import { PostReply } from './PostReply';

const Reply = (props: { userId: number }) => {
  return (
    <>
      <S.PageDarkDiv>
        <S.ModalContainer>
          <S.ModalDiv>
            <ReplyModalHeader userId={props.userId} />
            <S.Line></S.Line>
            <PostReply />
            <ReplyModalBody />
          </S.ModalDiv>
        </S.ModalContainer>
      </S.PageDarkDiv>
    </>
  );
};

export default Reply;
