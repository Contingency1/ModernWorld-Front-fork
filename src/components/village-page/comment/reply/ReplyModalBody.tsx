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

  const getReplies = async () => {
    const response = await REPLY.getReplies(430);
    setRepliesArray(response.data);
  };

  const deleteReplies = async (replyNo: number) => {
    const response = await REPLY.deleteReplies(430, replyNo);
    setRefresh(!refresh);
  };

  useEffect(() => {
    getReplies();
  }, [refresh]);

  return (
    <>
      {repliesArray.map(({ content, no, createdAt, user }) => (
        <S.RepliesRootDiv>
          {content}
          <S.DeleteReply
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/trash.png'
            }
            onClick={() => deleteReplies(no)}></S.DeleteReply>
        </S.RepliesRootDiv>
      ))}
    </>
  );
};
