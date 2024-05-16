'use client';

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
    margin-left: 29%;
    width: 42%;
    height: 16%;
    img {
        width: 100%;
        height: 100%;
    }
`;
/**
 * 최외곽 박스
 */
export const CreamBox = styled.div`
    width: 90%;
    height: 80%;
    background-color: #fffbee;
    border-radius: 30px;
    margin-left: 5%;
    margin-bottom: 12%;
    display: flex;
    flex-direction: column;
`;

/**
 * 검색창
 */
export const SearchBox = styled.div`
    margin-left: 34%;
    padding: 1%;
    width: 29%;
    height: 5%;
    background-color: #fffbee;
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
    background-color: #fffbee;
    font-size: 5vh;
    margin-left: 6%;
`;

export const LeftArrow = styled.div`
    margin-top: 14%;
    padding-left: 5%;
`;

export const GreyBox = styled.div`
    width: 75%;
    height: 92%;
    border-radius: 30px;
    background-color: #e5e5e5;
    margin-left: 1%;
    margin-top: 1%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
`;

export const RightArrow = styled.div`
    margin-top: 200%;
    margin-left: 12%;
`;

export const UserBox = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserCharacter = styled.div`
    margin-top: 2%;
    text-align: center;
    width: 95%;
    height: 95%;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: inset 0px 1.5px 1.5px 1px #868e96;
    margin-left: 15%;
    img {
        margin-top: 20%;
        width: 70%;
        height: 70%;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

export const RightArrow_SortDiv = styled.div``;

export const SortDiv = styled.div`
    margin-left: 15%;
    display: flex;
    flex-direction: column;
`;

export const SortLabel = styled.label`
    margin-top: 23%;
    display: flex;
    align-items: center;
`;

export const Sort = styled.input`
    width: 1rem;
    height: 1rem;
`;

export const SortText = styled.div`
    font-size: 1.5rem;
    margin-left: 15%;
`;

export const UserName = styled.div``;
