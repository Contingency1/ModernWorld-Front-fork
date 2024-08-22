'use client';

import { REPLY } from '@/app/api/reply';
import * as S from '@/components/village-page/comment/reply/styled';
import { RefreshReplyAtom } from '@/states/reply';
import { useAtom } from 'jotai';
import { useState } from 'react';

export const PostReply = () => {
  const [userReplyValue, setUserReplyValue] = useState('');
  const [refresh, setRefresh] = useAtom(RefreshReplyAtom);

  const commentEventTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserReplyValue(event.target.value);
  };

  const postReply = async () => {
    const response = await REPLY.postReplies(430, userReplyValue);
    setRefresh(!refresh);
    return response;
  };

  return (
    <S.PostRepliesDiv>
      <S.PostRepliesInput onChange={commentEventTarget}></S.PostRepliesInput>
      <div
        onClick={() => {
          postReply();
        }}>
        작성
      </div>
    </S.PostRepliesDiv>
  );
};
