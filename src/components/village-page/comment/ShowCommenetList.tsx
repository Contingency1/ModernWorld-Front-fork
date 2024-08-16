'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/comment/styled';
import { useEffect, useState } from 'react';

export const ShowCommentList = () => {
  const regex = /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/;

  const [commentList, setCommentList] = useState<
    {
      content: string;
      commentSender: { nickname: string };
      createdAt: string;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const getCommentList = async () => {
    const response = await COMMENT.getComments(
      39,
      currentPage,
      3,
      'desc',
      'receiverNo',
    );
    setTotalPage(response.meta.totalPage);
    return setCommentList(response.data);
  };

  console.log(commentList);

  useEffect(() => {
    getCommentList();
  }, [currentPage]);

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

  return (
    <>
      {commentList.map(({ content, commentSender, createdAt }, index) => (
        <S.CommentRootDiv key={index + 1}>
          <S.CommentNicknameDiv>
            <div style={{ color: '#A1A1A1', fontSize: '1vw' }}>
              {commentSender.nickname}
            </div>{' '}
            : {content}
          </S.CommentNicknameDiv>
          <S.CommentDateDiv>
            {createdAt ? createdAt.match(regex)[1] : null}
            <> </>
            {createdAt ? createdAt.match(regex)[2] : null}
          </S.CommentDateDiv>
          <S.PencilImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/trash.png'
            }
            width="1.8vw"
            height="1.8vw"></S.PencilImg>
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
