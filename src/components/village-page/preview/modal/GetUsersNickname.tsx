'use client';

import LEGENDS from '@/app/api/legends';
import * as S from '@/components/village-page/preview/modal/styled';
import { userHeartLegendType } from '@/types/legend';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const GetUsersNickname = (props: { userNo: number }) => {
  const [heartLegendList, setHeartLegendList] = useState<userHeartLegendType[]>(
    [],
  );
  const getUserHeartList = async () => {
    const response = await LEGENDS.getLikeLegends(props.userNo);
    setHeartLegendList(response.data);
  };

  useEffect(() => {
    getUserHeartList();
  }, []);
  return (
    <>
      {heartLegendList.map(({ sender: { nickname } }, index) => (
        <S.ListRootDiv key={index + 1}>
          <S.HeartImgDiv>
            <Image src={IMAGE.heart} alt={'하트'} fill sizes="100vw"></Image>
          </S.HeartImgDiv>
          <S.CommentDiv>{nickname}</S.CommentDiv>
        </S.ListRootDiv>
      ))}
    </>
  );
};

export default GetUsersNickname;
