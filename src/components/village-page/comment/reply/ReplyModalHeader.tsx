'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/comment/reply/styled';
import { CommentNumberAtom, ModalStateAtom } from '@/states/reply';
import { singleCommentType } from '@/types/comment';
import { IMAGE } from '@/utils/image';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

export const ReplyModalHeader = (props: { userId: number }) => {
  const setModalState = useSetAtom(ModalStateAtom);
  const [userComment, setUserComment] = useState<singleCommentType>({
    no: 1,
    content: '',
    createdAt: '',
    commentReceiver: {
      no: 1,
      nickname: '',
    },
    commentSender: {
      no: 1,
      nickname: '',
    },
    _count: {
      reply: 1,
    },
  });
  const commentNo = useAtomValue(CommentNumberAtom);
  const [editCommentState, setEditCommentState] = useState(false);
  const [editCommentValue, setEditCommentValue] = useState(userComment.content);
  const [refresh, setRefresh] = useState(false);

  const getComment = async () => {
    const response = await COMMENT.getSingleComment(commentNo);
    setUserComment(response);
    return;
  };

  useEffect(() => {
    getComment();
  }, [refresh]);

  const editComment = async (commentNo: number, comment: string) => {
    setEditCommentState(!editCommentState);
    if (editCommentState) {
      const response = await COMMENT.editCooments(commentNo, comment);
      setEditCommentState(!editCommentState);
      setRefresh(!refresh);
      return response;
    }
  };

  const deleteComments = async (commentNo: number) => {
    if (confirm('삭제하시겠습니까?')) {
      const response = await COMMENT.deleteComments(commentNo);
      try {
        setModalState(false);
      } catch (err) {
        alert('유효하지 않은 요청입니다');
      }
      return response;
    }
  };

  const editCommentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditCommentValue(e.target.value);
  };

  return (
    <>
      <S.ModalHeader>
        <S.HeaderUserName>
          {userComment.commentSender.nickname}
        </S.HeaderUserName>
        <S.CloseBtn
          src={IMAGE.remove}
          onClick={() => setModalState(false)}></S.CloseBtn>
      </S.ModalHeader>
      <S.CommentRootDiv>
        {!editCommentState ? (
          <S.CommentDiv>{userComment.content}</S.CommentDiv>
        ) : (
          <S.CommentEditInput
            defaultValue={userComment.content}
            onChange={(e) =>
              setEditCommentValue(e.target.value)
            }></S.CommentEditInput>
        )}
        <S.CommentCreated>{userComment.createdAt}</S.CommentCreated>
        <S.EditDeleteBtnDiv>
          <S.EditBtn onClick={() => editComment(commentNo, editCommentValue)}>
            {!editCommentState ? '수정' : '완료'}
          </S.EditBtn>
          /{' '}
          <S.DeleteBtn onClick={() => deleteComments(commentNo)}>
            삭제
          </S.DeleteBtn>
        </S.EditDeleteBtnDiv>
      </S.CommentRootDiv>
    </>
  );
};
