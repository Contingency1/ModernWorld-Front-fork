'use client';

import { REPLY } from '@/app/api/reply';
import * as S from '@/components/village-page/comment/reply/styled';
import { CommentNumberAtom, RefreshReplyAtom } from '@/states/reply';
import { useAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { IMAGE } from '@/utils/image';

export const PostReply = () => {
  const [userReplyValue, setUserReplyValue] = useState('');
  const [refresh, setRefresh] = useAtom(RefreshReplyAtom);
  const commentNo = useAtomValue(CommentNumberAtom);

  const postReply = async () => {
    const response = await REPLY.postReplies(commentNo, userReplyValue);
    setRefresh(!refresh);
    return response;
  };

  return (
    <S.PostRepliesDiv>
      <S.PostRepliesInput
        placeholder="댓글 작성하기"
        onChange={(event) =>
          setUserReplyValue(event.target.value)
        }></S.PostRepliesInput>
      <S.Images
        width="30px"
        height="30px"
        src={IMAGE.pencil}
        $marginLeft="5%"
        onClick={() => {
          postReply();
        }}></S.Images>
    </S.PostRepliesDiv>
  );
};
