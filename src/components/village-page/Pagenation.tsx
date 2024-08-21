'use client';

import * as S from '@/components/village-page/styled';
import RadioSort from './SortDiv';
import GetUserApi from './getUserApi';
import { useAtom, useAtomValue } from 'jotai';
import {
  currentPageAtom,
  PagesAtom,
  villageUsersArrayAtom,
} from '@/states/village';
import { IMAGE } from '@/utils/image';

export const Pagenation = (props: { animal: string }) => {
  const [currentPage, setCurrentPage] = useAtom<number>(currentPageAtom);
  const [villageUsersArray] = useAtom(villageUsersArrayAtom);
  const pages = useAtomValue(PagesAtom);

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
      <S.LeftSection>
        <S.BackgroundArrowCircle $marginTop="9vh">
          <S.LeftArrow onClick={() => PrevPage()}>
            <img src={IMAGE.leftArrow}></img>
          </S.LeftArrow>
        </S.BackgroundArrowCircle>
        <S.PagesDiv>{`${pages.page} / ${pages.totalPage}`}</S.PagesDiv>
      </S.LeftSection>
      <S.GreyBox>
        <GetUserApi animal={props.animal}></GetUserApi>
      </S.GreyBox>
      <S.RightSectionDiv>
        <S.BackgroundArrowCircle $marginTop="25vh">
          <S.RightArrow onClick={() => NextPage()}>
            <img src={IMAGE.rightArrow}></img>
          </S.RightArrow>
        </S.BackgroundArrowCircle>
        <RadioSort></RadioSort>
      </S.RightSectionDiv>
    </>
  );
};
