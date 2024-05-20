'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '@/components/village-page/style';
import RadioSort from './RadioSort';

export default function GetUserApi(radiosort: any) {
    const [userNicknameArray, setuserNicknameArray] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get('http://54.180.98.58:3000/users/all/1?take=4&orderByField=like');

                setuserNicknameArray(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, []);

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
