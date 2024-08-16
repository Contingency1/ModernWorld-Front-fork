'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/comment/styled';
import { useState } from 'react';

export const PostComment = () => {
  const [userComment, setUserComment] = useState('');

  const postComments = async (userNo: number, content: string) => {
    const response = await COMMENT.postComments(userNo, content);
    return response;
  };

  const commentEventTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserComment(event.target.value);
  };

  return (
    <S.CommentInputRootDiv>
      <S.CommentInput
        placeholder="방명록을 남겨보세요~"
        onChange={commentEventTarget}></S.CommentInput>
      <S.PencilImg
        src={
          'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EC%97%B0%ED%95%84.png'
        }
        width="2vw"
        height="2vw"
        $marginLeft="15%"
        onClick={() => postComments(39, userComment)}></S.PencilImg>
    </S.CommentInputRootDiv>
  );
};
