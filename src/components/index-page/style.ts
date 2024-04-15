'use client';

import styled from 'styled-components';

interface BackgroundColor {
    backgroundcolor?: string;
    display?: string;
    flexdirection?: string;
    alignitems?: string;
}

export const BackgroundColor = styled.body<BackgroundColor>`
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.backgroundcolor};
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexdirection};
    align-items: ${(props) => props.alignitems};
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
/**
 로그인 페이지 텍스트들
 @params width : number, height : number, font-size : number, margin-top : number 
 */
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
/**
 소셜 로그인 성공시 생성되는 접속버튼
 @params width : number, height : number
 */
export const MainPowerBtn = styled.div<MainPowerBtn>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://wang0514.s3.ap-northeast-2.amazonaws.com/page/power.png);
    filter: drop-shadow(5px 2px 2px grey);
`;

/**
 캐릭터를 생성하세요 텍스트입니다. 
 @parmas text : "none" | ""
 @return text-decoration : none=>글자 수를 의미
*/
export const CreateCharacterText = styled.div`
    font-size: 64px;
    color: white;
    margin-bottom: 2%;
`;

/**
 캐릭터 생성 시 주의사항 안내 텍스트
*/
export const InfoNewCharacter = styled.div`
    width: 80%;
    height: 25%;
    text-align: center;
    border-radius: 33px;
    background-color: white;
    opacity: 0.8;
    font-size: 2.5vh;
    line-height: 150%;
    margin-bottom: 1.3%;
`;

/**
 캐릭터 생성 최상위 부모 박스
 */

interface ChoiseCharacterBox {
    display?: string;
    flexdirection?: string;
    alignitems?: string;
}

export const ChoiseCharacterBox = styled.div<ChoiseCharacterBox>`
    width: 80%;
    height: 48%;
    background-color: white;
    background-color: rgba(256, 256, 256, 0.8);
    border-radius: 33px;
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexdirection};
    align-items: ${(props) => props.alignitems};
`;
/**
 캐릭터 생성 페이지 '캐릭터를 생성하세요!'
 */
export const StartText = styled.div`
    font-size: 64px;
    color: white;
    margin-bottom: 2%;
`;

/**
 캐릭터 생성 페이지 닉네임 입력 input
 */
export const InputNicknameBox = styled.div`
    margin-top: 1%;
    width: 64%;
    height: 17%;
    border-radius: 33px;
    background-color: white;
    font-size: 6.5vh;
    line-height: 130%;
`;
/**
 캐릭터 생성 박스
 */
export const ShowFirstCharacterBox = styled.div<ChoiseCharacterBox>`
    margin-top: 2%;
    width: 64%;
    height: 57%;
    border-radius: 33px;
    background-color: white;
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexdirection};
    align-items: ${(props) => props.alignitems};
`;

export const LeftArrow = styled.div`
    img {
        margin-right: 10px;
    }
`;

export const RightArrow = styled.div`
    img {
        margin-left: 10px;
    }
`;
