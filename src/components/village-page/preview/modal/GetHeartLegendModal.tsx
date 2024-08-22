'use client';

import * as S from '@/components/village-page/preview/modal/styled';
import { IMAGE } from '@/utils/image';
import LEGENDS from '@/app/api/legends';
import { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { IsModalStateAtom } from '@/states/village';

const GetHearLegendtModal = (props: { userNo: number }) => {
  const [heartLegendList, setHeartLegendList] = useState<
    {
      no: string;
      sender: { no: number; nickname: string; image: string };
    }[]
  >([]);
  const closeModal = useSetAtom(IsModalStateAtom);

  const getUserHeartList = async () => {
    const response = await LEGENDS.getLikeLegends(props.userNo);
    setHeartLegendList(response.data);
  };

  useEffect(() => {
    getUserHeartList();
  }, []);

  return (
    <S.RootDiv onClick={() => closeModal(false)}>
      <S.ModalRootDiv>
        <S.TitleDiv>좋아요</S.TitleDiv>
        <S.CloseButton onClick={() => closeModal(false)}>x</S.CloseButton>
        <S.LikeListRootDiv>
          {heartLegendList.map(({ sender: { nickname } }, index) => (
            <S.ListRootDiv key={index + 1}>
              <S.HeartImg src={IMAGE.heart}></S.HeartImg>
              <S.CommentDiv>{nickname}</S.CommentDiv>
            </S.ListRootDiv>
          ))}
        </S.LikeListRootDiv>
      </S.ModalRootDiv>
    </S.RootDiv>
  );
};

export default GetHearLegendtModal;
