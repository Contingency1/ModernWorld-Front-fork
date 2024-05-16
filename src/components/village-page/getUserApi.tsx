'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '@/components/village-page/style';

export default function GetUserApi() {
    const [userNicknameArray, setuserNicknameArray] = useState([]);
    const [userNickname, setUserNickname] = useState('');

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(
                    'http://54.180.98.58:3000/users/all/1?take=8&animal=dog&orderByField=like'
                );
                if (response.data !== undefined) {
                    setuserNicknameArray(response.data);
                }
                setUserNickname(response.data[0].nickname);
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, []);

    return (
        <>
            {userNicknameArray.map((e) => (
                <S.UserBox>
                    <S.UserCharacter>
                        <img src={e.characterLocker[0].character.image}></img>
                    </S.UserCharacter>
                    <S.UserName>{e.nickname}</S.UserName>
                </S.UserBox>
            ))}
        </>
    );
}
