'use client';

import { REPLY } from '@/app/api/reply';
import * as S from '@/components/village-page/comment/reply/styled';
import { CommentNumberAtom, RefreshReplyAtom } from '@/states/reply';
import { IMAGE } from '@/utils/image';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

export const ReplyModalBody = () => {
  const [repliesArray, setRepliesArray] = useState<
    {
      content: string;
      createdAt: string;
      no: number;
      user: { no: number; nickname: string };
    }[]
  >([]);
  const [refresh, setRefresh] = useAtom(RefreshReplyAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editReplyState, setEditReplyState] = useState(false);
  const [replyEventTarget, setReplyEventTarget] = useState('');
  const [editReplyNo, setEditReplyNo] = useState(1);
  const commentNo = useAtomValue(CommentNumberAtom);

  const getReplies = async () => {
    const response = await REPLY.getReplies(commentNo, currentPage, 5);
    setTotalPages(response.meta.totalPage);
    setRepliesArray(response.data);
  };

  const deleteReplies = async (replyNo: number) => {
    const response = await REPLY.deleteReplies(commentNo, replyNo);
    setRefresh(!refresh);
  };

  const editReplies = async (replyNo: number, replyValue: string) => {
    setEditReplyNo(replyNo);
    setEditReplyState(!editReplyState);
    if (editReplyState) {
      const response = await REPLY.editReplies(commentNo, replyNo, replyValue);
      setRefresh(!refresh);
      setEditReplyNo(1);
      return response;
    }
  };

  useEffect(() => {
    getReplies();
  }, [refresh, currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      alert('마지막 페이지입니다');
    }
  };

  const prevPage = () => {
    if (currentPage === 1) {
      alert('첫번째 페이지입니다');
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {repliesArray.map(({ content, no, createdAt, user }) => (
        <S.RepliesRootDiv>
          <S.Images src={IMAGE.comment} width="30px" height="30px"></S.Images>
          <S.ReplyNickname>
            {user.nickname}
            <S.ReplyCreatedAt>{createdAt}</S.ReplyCreatedAt>
          </S.ReplyNickname>
          /
          {no !== editReplyNo ? (
            <S.ReplyValueDiv>{content}</S.ReplyValueDiv>
          ) : (
            <S.ReplyValueInput
              defaultValue={content}
              onChange={(e) =>
                setReplyEventTarget(e.target.value)
              }></S.ReplyValueInput>
          )}
          <S.EditBtn
            onClick={() => {
              editReplies(no, replyEventTarget);
            }}>
            {no !== editReplyNo ? '수정' : '완료'}
          </S.EditBtn>
          /<S.DeleteBtn onClick={() => deleteReplies(no)}>삭제</S.DeleteBtn>
        </S.RepliesRootDiv>
      ))}
      <S.PagesDiv>
        <S.Images
          src={IMAGE.leftArrow}
          width="20px"
          height="20px"
          $marginRight="30px"
          onClick={() => prevPage()}></S.Images>
        {currentPage} / {totalPages}
        <S.Images
          src={IMAGE.rightArrow}
          width="20px"
          height="20px"
          $marginLeft="30px"
          onClick={() => nextPage()}></S.Images>
      </S.PagesDiv>
    </>
  );
};
