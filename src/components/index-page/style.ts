'use client';

import styled from 'styled-components';

interface BackgroundColor {
    props?: string;
    backgroundcolor?: string;
}

export const BackgroundColor = styled.body<BackgroundColor>`
    height: 100vh;
    width: 100wh;
    background-color: ${(props) => props.backgroundcolor};
`;

export const InputNickname = styled.input`
    width: 847px;
    height: 117px;
    border: 1px solid black;
    border-radius: 60px;
    background: #d7e9b9;
`;

interface MainLogo {
    props?: string;
    grid1?: string | number;
    grid2?: string | number;
    grid3?: string | number;
    grid4?: string | number;
}

export const MainLogo = styled.div<MainLogo>`
    width: 95wh;
    height: 100vh;
    background-size: 90% 110%;
    background-position: center;
    background-image: url('https://wang0514.s3.ap-northeast-2.amazonaws.com/page/mainLogo.png');
    background-repeat: no-repeat;
    grid-template-rows: ${(props) => props.grid1} ${(props) => props.grid2} ${(props) => props.grid3} ${(props) =>
            props.grid4};
    display: grid;
    place-items: center;
`;

interface MainLogoTextProps {
    width?: number;
    height?: number;
    fontSize?: number;
    margintop?: number;
    textshadow?: number;
}

export const MainLogoText = styled.div<MainLogoTextProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    font-size: ${(props) => props.fontSize}rem;
    margin-top: ${(props) => props.margintop}px;
    text-shadow: 4px 4px 4px white;
`;

interface MainPowerBtn {
    width?: number;
    height?: number;
}

export const MainPowerBtn = styled.div<MainPowerBtn>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://wang0514.s3.ap-northeast-2.amazonaws.com/page/power.png);
    filter: drop-shadow(5px 2px 2px grey);
`;

export const CreateCharacterText = styled.div`
    font-size: 64px;
    color: white;
    margin-bottom: 2%;
`;

export const InfoNewCharacter = styled.div`
    width: 80%;
    height: 25%;
    text-align: center;
    border-radius: 33px;
    background-color: white;
    opacity: 0.8;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 1.3%;
`;

export const ChoiseCharacterBox = styled.div`
    width: 80%;
    height: 48%;
    background-color: white;
    opacity: 0.8;
    text-align: center;
    border-radius: 33px;
`;

export const StartText = styled.div`
    font-size: 64px;
    color: white;
    margin-bottom: 2%;
`;
