'use client';

import * as S from '@/components/village-page/style';
import RadioSort from './SortDiv';
import GetUserApi from './getUserApi';
import { useAtom } from 'jotai';
import { currentPageAtom, villageUsersArrayAtom } from '@/states/village';

export const Pagenation = (props: { animal: string }) => {
  const [currentPage, setCurrentPage] = useAtom<number>(currentPageAtom);
  const [villageUsersArray] = useAtom(villageUsersArrayAtom);

  const NextPage = () => {
    villageUsersArray.length < 8
      ? alert('마지막 페이지입니다')
      : setCurrentPage(currentPage + 1);
  };

  const PrevPage = () => {
    currentPage === 1
      ? alert('첫 페이지입니다')
      : setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <S.LeftArrow onClick={() => PrevPage()}>
        <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"></img>
      </S.LeftArrow>
      <S.GreyBox>
        <GetUserApi animal={props.animal}></GetUserApi>
      </S.GreyBox>
      <S.RightArrow_SortDiv>
        <S.RightArrow onClick={() => NextPage()}>
          <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"></img>
        </S.RightArrow>
        <RadioSort></RadioSort>
      </S.RightArrow_SortDiv>
    </>
  );
};
