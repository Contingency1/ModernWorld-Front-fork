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
import Image from 'next/image';

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
        <S.BackgroundArrowCircle $marginTop="13vh">
          <S.LeftArrow onClick={() => PrevPage()}>
            <Image alt="왼쪽 화살표" fill src={IMAGE.leftArrow}></Image>
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
            <Image alt="오른쪽 화살표" fill src={IMAGE.rightArrow}></Image>
          </S.RightArrow>
        </S.BackgroundArrowCircle>
        <RadioSort></RadioSort>
      </S.RightSectionDiv>
    </>
  );
};
