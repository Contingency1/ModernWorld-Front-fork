'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/comment/reply/styled';
import { useEffect, useState } from 'react';

export const ReplyModalHeader = () => {
  //   const [userNickname, setUserNickname] = useState();

  //   const getUserComment = async () => {
  //     const response = await COMMENT.getComments(39);
  //     setUserNickname(response);
  //     console.log(userNickname);
  //   };

  //   useEffect(() => {
  //     getUserComment();
  //   }, []);

  return (
    <>
      <S.ModalHeader>
        <S.HeaderUserName>김은우01</S.HeaderUserName>
        <S.CloseBtn
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png'
          }></S.CloseBtn>
      </S.ModalHeader>
      <S.CommentDiv>
        100글자100글자100글자100글자100글자100글자100글자 100글자 100글자
        100글자 100글자 100글자 100글자 100글자 100글자
      </S.CommentDiv>
    </>
  );
};
