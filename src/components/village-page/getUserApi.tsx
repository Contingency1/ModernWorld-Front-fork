'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '@/components/village-page/style';
import { RadioStateAtom } from './RadioSort';
import { useAtom } from 'jotai';

export default function GetUserApi() {
    const [userNicknameArray, setuserNicknameArray] = useState([]);

    const [radioAtom] = useAtom(RadioStateAtom);

    let sort = radioAtom;

    useEffect(() => {
        async function getUser() {
            switch (radioAtom) {
                case '최신':
                    sort = 'createdAt';
                    break;
                case '인기':
                    sort = 'like';
                    break;
                case '랭킹':
                    sort = 'accumulationPoint';
                    break;
                case '좋아요':
                    sort = 'like';
                    break;
            }
            try {
                const response = await axios.get(`http://54.180.98.58:3000/users/all/1?take=8&orderByField=${sort}`);

                setuserNicknameArray(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, [radioAtom]);
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
                }) => (
                    <S.UserBox>
                        <S.UserCharacter>
                            <img src={e.characterLocker[0].character.image}></img>
                        </S.UserCharacter>
                        {e.nickname}
                        <S.UserHeart>
                            <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png"></img>
                            {e.like}
                        </S.UserHeart>
                        <S.UserName>{e.nickname}</S.UserName>
                    </S.UserBox>
                )
            )}
        </>
    );
}
