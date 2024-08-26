'use client';

import { COMMENT } from '@/app/api/comment';
import * as S from '@/components/village-page/preview/style';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const GetUserCommentCount = ({ userNo }: { userNo: number }) => {
  const [comment, setComment] = useState(0);
  const route = useRouter();
  useEffect(() => {
    async function getComments(userNo: number) {
      const response = await COMMENT.getComments(
        userNo,
        1,
        1,
        'asc',
        'receiverNo',
      );
      setComment(response.meta.totalCount);
    }
    getComments(userNo);
  }, [userNo]);

  return (
    <>
      <S.MenuButtonDiv
        width="14vw"
        $marginLeft="10%"
        onClick={() => route.push(`${userNo}/comment`)}>
        <S.ImgStyle $marginRight="5%" width="20px" height="20px">
          <Image
            src={IMAGE.comment}
            alt={'방명록'}
            fill
            sizes="(max-width : 20px) 100vw"></Image>
        </S.ImgStyle>
        방명록 남기기 {comment}
      </S.MenuButtonDiv>
    </>
  );
};

export default GetUserCommentCount;
