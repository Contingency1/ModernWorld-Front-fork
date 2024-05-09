'use client';

import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import styled from 'styled-components';

export const BackgroundDisplay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e5d9b6;
`;

/**
 * 마을이름
 */
export const Title = styled.div`
    text-align: center;
    color: #000000;
`;

/**
 * 검색창
 */
export const SearchBox = styled.div`
    margin-left: 35.5%;
    margin-top: 1%;
    width: 29%;
    height: 5%;
    background-color: #e5d9b6;
    border-bottom: 3px solid black;
    display: flex;
    img {
        width: 10%;
        height: 100%;
    }
`;

/**
 * 검색input
 */
export const SearchInput = styled.input`
    width: 80%;
    border-width: 0;
    outline: none;
    background-color: #e5d9b6;
    font-size: 5vh;
    margin-left: 6%;
`;
