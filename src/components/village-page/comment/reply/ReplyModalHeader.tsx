'use client';

import * as S from '@/components/village-page/comment/reply/styled';
import { ModalStateAtom } from '@/states/reply';
import { useSetAtom } from 'jotai';

export const ReplyModalHeader = () => {
  const setModalState = useSetAtom(ModalStateAtom);

  return (
    <>
      <S.ModalHeader>
        <S.HeaderUserName>김은우01</S.HeaderUserName>
        <S.CloseBtn
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png'
          }
          onClick={() => setModalState(false)}></S.CloseBtn>
      </S.ModalHeader>
      <S.CommentRootDiv>
        <S.CommentDiv>
          100글자100글자100글자100글자100글자100글자100글자 100글자 100글자
          100글자 100글자 100글자 100글자 100글자 100글자
        </S.CommentDiv>
        <S.CommentCreated>2222-2-22</S.CommentCreated>
        <S.EditDeleteBtnDiv>
          <S.EditBtn>수정</S.EditBtn>/ <S.DeleteBtn>삭제</S.DeleteBtn>
        </S.EditDeleteBtnDiv>
      </S.CommentRootDiv>
    </>
  );
};
