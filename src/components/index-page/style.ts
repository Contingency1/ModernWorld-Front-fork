'use client';

import { StyleType } from '@/types/style';
import Link from 'next/link';
import styled from 'styled-components';

/**
 * 배경색, 그리드 부여
 */
export const BackgroundColor = styled.body<StyleType>`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${(props) => props.$backColor};
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
`;

/**
 * 배경에 있는 커다란 새싹 백그라운드 이미지
 */
export const MainLogo = styled.div<StyleType>`
  width: 95vw;
  height: 100vh;
  background-size: 90% 110%;
  background-position: center;
  background-image: url('https://wang0514.s3.ap-northeast-2.amazonaws.com/page/mainLogo.png');
  background-repeat: no-repeat;
  grid-template-rows: ${(props) => props.$grid1} ${(props) => props.$grid2} ${(
      props,
    ) => props.$grid3} ${(props) => props.$grid4};
  display: grid;
  place-items: center;
  grid-gap: 1%;
`;

/**
 로그인 페이지 텍스트들
 @params width : number, height : number, font-size : number, margin-top : number 
 */
export const MainLogoText = styled.div<StyleType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35vw;
  height: 30vh;
  font-size: ${(props) => props.$fontSize};
  margin-top: ${(props) => props.$marginTop};
  margin-left: ${(props) => props.$marginLeft};
  text-shadow: 4px 4px white;
`;

/**
 * selfmade login btn
 * @params color : string, textcolor : string, img_margin_right : string, img_width : string, img_height : string
 */
export const LoginBtnLink = styled(Link)<StyleType>`
  width: 18%;
  height: 90%;
  background-color: ${(props) => props.color};
  color: ${(props) => props.$textColor};
  margin-top: 5%;
  border-radius: 7px;
  font-family: 'Pretendard-Regular';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  text-decoration-line: none;
  font-size: ${(props) => props.font + '%'};
  font-weight: bolder;
  display: flex;
  align-items: center;
  img {
    margin-left: ${(props) => props.$imgMarginLeft};
    margin-right: ${(props) => props.$imgMarginRight};
    width: ${(props) => props.$imgWidth};
    height: ${(props) => props.$imgHeight};
  }
`;

/**
 소셜 로그인 성공시 생성되는 접속버튼
 @params width : string, height : string
 */
export const MainPowerBtn = styled.div<StyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
  margin: 1%;
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
 메인박스
 */

export const ChoiseCharacterBox = styled.div<StyleType>`
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
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
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
  margin-left: 3%;
  width: 35%;
  height: 100%;
  font-size: 35px;
`;
/**
 * input 박스
 */
export const InputNickname = styled.input`
  margin-left: 25%;
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
  margin-top: 14.5%;
  grid-area: nicknameinput;
  color: #ababab;
  font-size: 2.4vh;
`;

/**
 캐릭터 생성 박스
 */
export const ShowFirstCharacterBox = styled.div<StyleType>`
  width: 100%;
  height: 80%;
  border-radius: 33px;
  background-color: white;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
  grid-area: center;
  margin-bottom: 2%;
`;
/**
 * 왼쪽 화살표 그리드 위치
 */
export const LeftArrow = styled.div`
  grid-area: left;
  cursor: pointer;
`;
/**
 * 오른쪽 화살표 그리드 위치
 */
export const RightArrow = styled.div`
  grid-area: right;
  cursor: pointer;
`;

/**
 * 캐릭터 위치 크기 및 위치 조정
 */
export const FirstCharacter = styled.div`
  grid-area: center;
  img {
    width: 180px;
    height: 180px;
  }
  z-index: 1;
`;
/**
 * 캐릭 선택시 주의 문구
 */
export const WarningText = styled.div`
  grid-area: center;
  color: #ababab;
  font-size: 2.4vh;
  margin-top: 29%;
`;
/**
 * 시작하기 버튼
 */
export const startButton = styled(Link)`
  grid-area: right;
  color: #ffffff;
  margin-top: 135%;
  margin-left: 15%;
  font-size: 5vh;
  cursor: pointer;
  text-decoration-line: none;
  &:hover {
    color: red;
  }
`;
