'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '@/components/village-page/style';
import { SortStateAtom } from './SortDiv';
import { atom, useAtom } from 'jotai';
import { PageNumber } from './Pagenation';
import { searchValue } from './SearchBox';

export default function GetUserApi() {
    const [userNicknameArray, setuserNicknameArray] = useState([]);
    const [userCount, setUserCount] = useAtom(userCountAtom);

    const [radioAtom] = useAtom(SortStateAtom);
    const [page_num] = useAtom(PageNumber);
    const [keyword] = useAtom(searchValue);

    let sort = '';

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
            try {
                const response = await axios.get(
                    `http://54.180.98.58:3000/users?pageNo=${page_num}&take=8&${sort}&nickname=${keyword}`
                );

                setuserNicknameArray(response.data);
                setUserCount(response.data);
            } catch (error) {
                console.error(error);
            }
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
                    like: number;
                    nickname: string;
                    accumulationPoint: number;
                }) => (
                    <S.UserBox>
                        <S.UserCharacter>
                            <img src={e.characterLocker[0].character.image}></img>
                        </S.UserCharacter>
                        {e.nickname}
                        <S.UserHeart>
                            <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png"></img>
                            {e.like}
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
