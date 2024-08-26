'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/comment/styled';
import { commentRefreshAtom } from '@/states/commentRefresh';
import { CommentNumberAtom, ModalStateAtom } from '@/states/reply';
import { UserSelectedAtom } from '@/states/village';
import { IMAGE } from '@/utils/image';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

export const ShowCommentList = (props: { userNo: number }) => {
  const regex = /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/;

  const [commentList, setCommentList] = useState<
    {
      content: string;
      commentSender: { nickname: string };
      createdAt: string;
      no: number;
      _count: {
        reply: number;
      };
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [commentRefresh, setCommentRefresh] = useAtom(commentRefreshAtom);
  const [editCommentValue, setEditCommentValue] = useState('');
  const [editCommentNo, setEditCommentNo] = useState(0);
  const [userSelected] = useAtom(UserSelectedAtom);
  const modalState = useSetAtom(ModalStateAtom);
  const commentNo = useSetAtom(CommentNumberAtom);

  const getCommentList = async () => {
    const response = await COMMENT.getComments(
      props.userNo,
      currentPage,
      3,
      'desc',
      'receiverNo',
    );
    setTotalPage(response.meta.totalPage);
    return setCommentList(response.data);
  };

  const deleteComments = async (commentNo: number) => {
    if (confirm('삭제하시겠습니까?')) {
      const response = await COMMENT.deleteComments(commentNo);
      try {
        setCommentRefresh(!commentRefresh);
      } catch (err) {
        alert('유효하지 않은 요청입니다');
      }
      return response;
    }
  };

  useEffect(() => {
    getCommentList();
  }, [currentPage, commentRefresh]);

  const nextPage = () => {
    totalPage > currentPage
      ? setCurrentPage(currentPage + 1)
      : alert('마지막 페이지입니다');
  };

  const prevPage = () => {
    currentPage === 1
      ? alert('첫번째 페이지입니다')
      : setCurrentPage(currentPage - 1);
  };

  const editCommentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditCommentValue(e.target.value);
  };

  return (
    <>
      {commentList.map(
        ({ content, commentSender, createdAt, no, _count }, index) => (
          <S.CommentRootDiv key={index + 1}>
            <S.CommentNicknameDiv>
              <S.CommentSenderNicknameDiv>
                {commentSender.nickname}
              </S.CommentSenderNicknameDiv>
              {no !== editCommentNo ? (
                <S.CommentValueDiv>{content}</S.CommentValueDiv>
              ) : (
                <S.CommentEditInput
                  defaultValue={content}
                  onChange={editCommentHandler}></S.CommentEditInput>
              )}
            </S.CommentNicknameDiv>
            <S.ReplyDiv>
              <S.Images
                src={IMAGE.comment}
                width="1.8vw"
                height="1.8vw"
                $marginLeft="1vw"
                onClick={() => {
                  modalState(true);
                  commentNo(no);
                }}></S.Images>
              <S.ReplyCountDiv>{_count.reply}</S.ReplyCountDiv>
            </S.ReplyDiv>
            {/* <S.EditButton
              onClick={() => {
                editComment(no, editCommentValue);
              }}
              $pointerClick={!editCommentState || no === editCommentNo}>
              {no === editCommentNo ? '완료' : '수정'}
            </S.EditButton> */}
            <S.CommentDateDiv>
              {createdAt ? createdAt.match(regex)?.[1] : null}
              <> </>
              {createdAt ? createdAt.match(regex)?.[2] : null}
            </S.CommentDateDiv>
            <S.Images
              src={IMAGE.trashBox}
              width="1.8vw"
              height="1.8vw"
              $marginRight="1vw"
              onClick={() => {
                deleteComments(no);
              }}></S.Images>
          </S.CommentRootDiv>
        ),
      )}
      <S.PageNationDiv>
        <S.Images
          src={IMAGE.leftArrow}
          width="1vw"
          height="1vw"
          onClick={() => prevPage()}></S.Images>
        {currentPage} / {totalPage}
        <S.Images
          src={IMAGE.rightArrow}
          width="1vw"
          height="1vw"
          onClick={() => nextPage()}></S.Images>
      </S.PageNationDiv>
    </>
  );
};
