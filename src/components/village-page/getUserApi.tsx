'use client';

import { useEffect, useState } from 'react';
import * as S from '@/components/village-page/style';
import { SortStateAtom } from './SortDiv';
import { atom, useAtom } from 'jotai';
import { PageNumber } from './Pagenation';
import { searchValue } from './SearchBox';
import { Village } from '@/app/api/village';

export default function GetUserApi() {
    const [userNicknameArray, setuserNicknameArray] = useState([]);
    const [userCount, setUserCount] = useAtom(userCountAtom);

    const [radioAtom] = useAtom(SortStateAtom);
    const [page_num, setPage_Num] = useAtom(PageNumber);
    const [keyword] = useAtom(searchValue);

    let sort = '';

    useEffect(() => {
        setPage_Num(1);
    }, [radioAtom, keyword]);

    useEffect(() => {
        async function getUser() {
            switch (radioAtom) {
                case '최신':
                    sort = '';
                    break;
                case '랭킹':
                    sort = '&orderByField=accumulationPoint';
                    break;
                case '좋아요':
                    sort = '&orderByField=like';
                    break;
            }
            const response = await Village.getVillageUser(page_num,8,sort,'cat',keyword)
            setuserNicknameArray(response)
            setUserCount(response)
        }
        getUser();
    }, [radioAtom, page_num, keyword]);

    return (
        <>
            {userNicknameArray.map(
                (e: {
                    accumulation: number;
                    characterLocker: Array<{ character: { image: string } }>;
                    createdAt: string;
                    description: string;
                    legend: { likeCount: number };
                    nickname: string;
                    accumulationPoint: number;
                },i : number) => (
                    <S.UserBox key={e.nickname}>
                        <S.UserCharacter>
                            <img src={e.characterLocker[0].character.image}></img>
                        </S.UserCharacter>
                        {e.nickname}
                        <S.UserHeart>
                            <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png"></img>
                            {e.legend.likeCount}
                            <> point : {e.accumulationPoint}</>
                        </S.UserHeart>
                        <S.UserName>{e.nickname}</S.UserName>
                    </S.UserBox>
                )
            )}
        </>
    );
}

export const userCountAtom = atom([]);
export const animal = atom('');
