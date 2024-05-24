'use client';

import * as S from '@/components/village-page/style';
import GetUserApi, { userCountAtom } from './getUserApi';
import RadioSort from './SortDiv';
import { atom, useAtom } from 'jotai';

export const Pagenation = () => {
    const [userCount] = useAtom(userCountAtom);
    const [pageNumberState, setPageNumberState] = useAtom(PageNumber);

    const NextPage = () => {
        userCount.length < 8 ? alert('마지막 페이지입니다') : setPageNumberState(pageNumberState + 1);
    };

    const PrevPage = () => {
        pageNumberState === 1 ? alert('첫 페이지입니다') : setPageNumberState(pageNumberState - 1);
    };

    console.log(pageNumberState);
    return (
        <>
            <S.LeftArrow onClick={() => PrevPage()}>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"></img>
            </S.LeftArrow>
            <S.GreyBox>
                <GetUserApi></GetUserApi>
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

export const PageNumber = atom(1);
