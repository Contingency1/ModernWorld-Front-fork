'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/comment/styled';
import { commentRefreshAtom } from '@/states/commentRefresh';
import { UserSelectedAtom } from '@/states/village';
import { IMAGE } from '@/utils/image';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { useState } from 'react';

export const PostComment = ({ userNo }: { userNo: number }) => {
  const [userComment, setUserComment] = useState('');
  const [commentRefresh, setCommentRefresh] = useAtom(commentRefreshAtom);

  const postComments = async (userNo: number, content: string) => {
    if (confirm('방명록을 작성하시겠습니까?')) {
      const response = await COMMENT.postComments(userNo, content);
      setCommentRefresh(!commentRefresh);
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
      <S.ImageDiv
        width="2vw"
        height="2vw"
        $marginLeft="15%"
        onClick={() => postComments(userNo, userComment)}>
        <Image
          src={IMAGE.pencil}
          sizes="(max-width : 38px) 100vw"
          fill
          alt={'댓글 작성하기'}
        />
      </S.ImageDiv>
    </S.CommentInputRootDiv>
  );
};
