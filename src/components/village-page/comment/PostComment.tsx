'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/comment/styled';
import { commentRefreshAtom } from '@/states/commentRefresh';
import { UserSelectedAtom } from '@/states/village';
import { useAtom } from 'jotai';
import { useState } from 'react';

export const PostComment = () => {
  const [userComment, setUserComment] = useState('');
  const [commentRefresh, setCommentRefresh] = useAtom(commentRefreshAtom);
  const [userSelected] = useAtom(UserSelectedAtom);

  const postComments = async (userNo: number, content: string) => {
    if (confirm('방명록을 작성하시겠습니까?')) {
      const response = await COMMENT.postComments(userNo, content);
      try {
        if (response.status === 201) {
          setCommentRefresh(!commentRefresh);
          return alert('작성이 완료되었습니다');
        }
      } catch (err) {
        alert('유효하지 않은 요청입니다');
      }
      return response;
    }
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
        onClick={() =>
          postComments(Number(userSelected), userComment)
        }></S.PencilImg>
    </S.CommentInputRootDiv>
  );
};
