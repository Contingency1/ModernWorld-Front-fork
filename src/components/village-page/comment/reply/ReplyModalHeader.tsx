'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/comment/reply/styled';
import { ModalStateAtom } from '@/states/reply';
import { IMAGE } from '@/utils/image';
import { useSetAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const ReplyModalHeader = (props: { userId: number }) => {
  const setModalState = useSetAtom(ModalStateAtom);
  const [userComment, setUserComment] = useState([]);

  const getComment = async () => {
    const response = await COMMENT.getComments(props.userId);
    setUserComment(response);
    return;
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <S.ModalHeader>
        <S.HeaderUserName>김은우01</S.HeaderUserName>
        <S.CloseBtn
          src={IMAGE.remove}
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
