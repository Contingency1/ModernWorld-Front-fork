'use client';

import styled from 'styled-components';

interface BackgroundColor {
    backgroundcolor?: string;
    display?: string;
    flexdirection?: string;
    alignitems?: string;
}
/**
 * 배경색, 그리드 부여
 */
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
/**
 * 배경에 있는 커다란 새싹 백그라운드 이미지
 */
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
/**
 메인박스
 */

export const ChoiseCharacterBox = styled.div<ChoiseCharacterBox>`
    width: 80%;
    height: 53%;
    background-color: white;
    background-color: rgba(256, 256, 256, 0.8);
    border-radius: 33px;
    display: grid;
    grid-template-areas: '. nicknameinput .' 'left center right';
    grid-template-columns: 18% 64% 18%;
    grid-template-rows: 30% 70%;
    place-items: center;
    flex-direction: ${(props) => props.flexdirection};
    align-items: ${(props) => props.alignitems};
    margin-bottom: 2%;
`;

/**
 닉네임 input 감싸는 박스
 */
export const InputNicknameBox = styled.div`
    margin-top: 1%;
    width: 100%;
    height: 70%;
    border-radius: 33px;
    background-color: white;
    font-size: 6.5vh;
    line-height: 130%;
    grid-area: nicknameinput;
    display: flex;
    align-items: center;
`;
/**
 * 닉네임 텍스트
 */
export const TextNickname = styled.div`
    margin-top: 1%;
    margin-left: 0.5%;
    width: 35%;
    height: 100%;
    font-size: 35px;
`;
/**
 * input 박스
 */
export const InputNickname = styled.input`
    margin-left: 20%;
    grid-area: nicknameinput;
    width: 68%;
    height: 60%;
    font-size: 35px;
    outline: none;
    border: 0;
`;

/**
 * 닉네임 조건 검사 텍스트
 */
export const NewNicknamecondition = styled.div`
    margin-top: 13.5%;
    grid-area: nicknameinput;
    color: #ababab;
    font-size: 2.4vh;
`;

/**
 캐릭터 생성 박스
 */
export const ShowFirstCharacterBox = styled.div<ChoiseCharacterBox>`
    width: 100%;
    height: 80%;
    border-radius: 33px;
    background-color: white;
    flex-direction: ${(props) => props.flexdirection};
    align-items: ${(props) => props.alignitems};
    grid-area: center;
    margin-bottom: 2%;
`;
/**
 * 왼쪽 화살표 그리드 위치
 */
export const LeftArrow = styled.div`
    grid-area: left;
`;
/**
 * 오른쪽 화살표 그리드 위치
 */
export const RightArrow = styled.div`
    grid-area: right;
    img {
    }
`;

interface FirstCharacter {
    display: string;
}
/**
 * 고양이 캐릭터 위치 크기 및 위치 조정
 */
export const FirstCat = styled.div<FirstCharacter>`
    grid-area: center;
    img {
        width: 150px;
        height: 150px;
    }
    z-index: 1;
    display: ${(props) => props.display};
`;
/**
 * 개 캐릭터 위치 크기 및 위치 조정
 */
export const FirstDog = styled.div<FirstCharacter>`
    grid-area: center;
    img {
        width: 175px;
        height: 175px;
    }
    z-index: 1;
    display: ${(props) => props.display};
`;
export const WarningText = styled.div`
    grid-area: center;
    color: #ababab;
    font-size: 2.4vh;
    margin-top: 29%;
`;
export const startButton = styled.div`
    grid-area: right;
    color: #ffffff;
    margin-top: 135%;
    margin-left: 15%;
    font-size: 5vh;
    cursor: pointer;
    Link {
        text-decoration-line: none;
    }
    &:hover {
        color: red;
    }
`;
