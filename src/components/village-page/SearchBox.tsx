'use client';

import * as S from '@/components/village-page/style';
import axios from 'axios';
import { useEffect } from 'react';

interface SearchBox {
    inputcolor: string;
}
export default function SearchBox(props: SearchBox) {
    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(`http://54.180.98.58:3000/users/all/1?take=8&orderByField=like`);
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, []);

    return (
        <S.SearchDiv>
            <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EB%8F%8B%EB%B3%B4%EA%B8%B0"></img>
            <S.SearchInput placeholder="닉네임으로 검색" inputcolor={props.inputcolor}></S.SearchInput>
            <></>
        </S.SearchDiv>
    );
}
