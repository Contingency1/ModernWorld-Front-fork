'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/comment/styled';
import { commentRefreshAtom } from '@/states/commentRefresh';
import { UserSelectedAtom } from '@/states/village';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

export const ShowCommentList = () => {
  const regex = /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/;

  const [commentList, setCommentList] = useState<
    {
      content: string;
      commentSender: { nickname: string };
      createdAt: string;
      no: number;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [commentRefresh, setCommentRefresh] = useAtom(commentRefreshAtom);
  const [editCommentState, setEditCommentState] = useState(false);
  const [editCommentValue, setEditCommentValue] = useState('');
  const [editCommentNo, setEditCommentNo] = useState(0);
  const [userSelected] = useAtom(UserSelectedAtom);

  const getCommentList = async () => {
    const response = await COMMENT.getComments(
      Number(userSelected),
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

  const editComment = async (commentNo: number, comment: string) => {
    setEditCommentState(!editCommentState);
    setEditCommentNo(commentNo);
    if (editCommentState) {
      const response = await COMMENT.editCooments(commentNo, comment);
      setCommentRefresh(!commentRefresh);
      setEditCommentState(!editCommentState);
      setEditCommentNo(0);
      return response;
    }
  };

  const editCommentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditCommentValue(e.target.value);
  };

  return (
    <>
      {commentList.map(({ content, commentSender, createdAt, no }, index) => (
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
          <S.PencilImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/previewpage/addComment.png'
            }
            width="1.8vw"
            height="1.8vw"
            $marginLeft="1vw"></S.PencilImg>
          <S.EditButton
            onClick={() => {
              editComment(no, editCommentValue);
            }}
            $pointerClick={!editCommentState || no === editCommentNo}>
            {no === editCommentNo ? '완료' : '수정'}
          </S.EditButton>
          <S.CommentDateDiv>
            {createdAt ? createdAt.match(regex)?.[1] : null}
            <> </>
            {createdAt ? createdAt.match(regex)?.[2] : null}
          </S.CommentDateDiv>
          <S.PencilImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/trash.png'
            }
            width="1.8vw"
            height="1.8vw"
            $marginRight="1vw"
            onClick={() => {
              deleteComments(no);
            }}></S.PencilImg>
        </S.CommentRootDiv>
      ))}
      <S.PageNationDiv>
        <S.PencilImg
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png'
          }
          width="1vw"
          height="1vw"
          onClick={() => prevPage()}></S.PencilImg>
        {currentPage} / {totalPage}
        <S.PencilImg
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png'
          }
          width="1vw"
          height="1vw"
          onClick={() => nextPage()}></S.PencilImg>
      </S.PageNationDiv>
    </>
  );
};
