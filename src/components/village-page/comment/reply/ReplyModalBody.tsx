'use client';

import { REPLY } from '@/app/api/reply';
import * as S from '@/components/village-page/comment/reply/styled';
import { RefreshReplyAtom } from '@/states/reply';
import { useAtom } from 'jotai';
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

  const getReplies = async () => {
    const response = await REPLY.getReplies(430, currentPage, 6);
    setTotalPages(response.meta.totalPage);
    setRepliesArray(response.data);
  };

  const deleteReplies = async (replyNo: number) => {
    const response = await REPLY.deleteReplies(430, replyNo);
    setRefresh(!refresh);
  };

  const editReplies = async (replyNo: number, replyValue: string) => {
    setEditReplyNo(replyNo);
    setEditReplyState(!editReplyState);
    if (editReplyState) {
      const response = await REPLY.editReplies(430, replyNo, replyValue);
      setRefresh(!refresh);
      setEditReplyNo(1);
      return response;
    }
  };

  useEffect(() => {
    getReplies();
  }, [refresh, currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      alert('첫번째 페이지입니다');
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const replyEventTargetHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setReplyEventTarget(event.target.value);
  };

  return (
    <>
      {repliesArray.map(({ content, no, createdAt, user }) => (
        <S.RepliesRootDiv>
          {user.nickname} /{' '}
          {no !== editReplyNo ? (
            <S.ReplyValueDiv>{content}</S.ReplyValueDiv>
          ) : (
            <S.ReplyValueInput
              defaultValue={content}
              onChange={replyEventTargetHandler}></S.ReplyValueInput>
          )}
          <S.Images
            width="20px"
            height="20px"
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/trash.png'
            }
            onClick={() => deleteReplies(no)}></S.Images>
          <div
            onClick={() => {
              editReplies(no, replyEventTarget);
            }}>
            {no !== editReplyNo ? '수정' : '완료'}
          </div>
        </S.RepliesRootDiv>
      ))}
      <S.PagesDiv>
        <S.Images
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png'
          }
          width="20px"
          height="20px"
          onClick={() => prevPage()}></S.Images>
        {currentPage}/{totalPages}
        <S.Images
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png'
          }
          width="20px"
          height="20px"
          onClick={() => nextPage()}></S.Images>
      </S.PagesDiv>
    </>
  );
};
