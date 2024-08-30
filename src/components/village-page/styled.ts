'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

export const BackgroundDisplay = styled.div<StyleType>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
`;

export const ExitButton = styled.div<StyleType>`
  position: absolute;
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  width: 3vw;
  height: 3vw;
  cursor: pointer;
`;

/**
 * 마을이름
 */
export const Title = styled.div`
  position: relative;
  margin-left: 29%;
  width: 42%;
  height: 16%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
/**
 * 최외곽 박스
 */
export const TheBiggestBox = styled.div`
  width: 90%;
  height: 80%;
  background-color: ${(props) => props.color};
  border-radius: 30px;
  margin-left: 5%;
  margin-bottom: 12%;
  display: flex;
  flex-direction: column;
`;

/**
 * 검색창
 */
export const SearchDiv = styled.div`
  margin-left: 34%;
  padding: 1%;
  width: 29%;
  height: 5%;
  border-bottom: 3px solid black;
  display: flex;
`;

/**
 * 검색input
 */
export const SearchInput = styled.input<StyleType>`
  width: 80%;
  border-width: 0;
  outline: none;
  background-color: ${({ $inputColor }) => $inputColor};
  font-size: 4vh;
  margin-left: 6%;
`;
/**
 * 왼쪽 화살표
 */

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  width: 8vw;
  height: 75vh;
`;

export const LeftArrow = styled.div`
  position: relative;
  width: 5vw;
  height: 5vw;
  cursor: pointer;
`;
/**
 * 유저들을 8명씩 보여주는 박스
 */
export const GreyBox = styled.div`
  width: 75%;
  height: 85%;
  border-radius: 30px;
  background-color: #e5e5e5;
  margin-left: 1%;
  margin-top: 1.5%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
`;
/**
 * 오른쪽 화살표
 */
export const RightArrow = styled.div`
  position: relative;
  width: 5vw;
  height: 5vw;
  margin-left: 10%;
  cursor: pointer;
`;

/**
 * 유저 한명의 박스
 */
export const UserBox = styled.div`
  width: 65%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
`;

export const ShowUserNickname = styled.div`
  width: 10vw;
  margin-top: 5px;
  text-align: center;
  font-size: 15px;
`;

export const ShowUserHeartDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 10vw;
  font-size: 15px;
`;

/**
 * 유저의 캐릭터를 담는 div
 */
export const UserCharacter = styled.div`
  margin-top: 2%;
  text-align: center;
  width: 105%;
  height: 105%;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: inset 0px 1.5px 1.5px 1px #868e96;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserCharacterImgDiv = styled.div`
  width: 70%;
  height: 80%;
  position: relative;
`;
/**
 *
 */
export const FlexBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const RightArrow_SortDiv = styled.div``;

/**
 * 유저 이름 폰트 사이즈
 */
export const UserName = styled.div`
  font-size: 1%;
`;
/**
 * 유저 하트 수 표시해주는 이미지 크기 조정
 */
export const UserHeart = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
`;

export const SortCheckDiv = styled.div`
  width: 120px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  cursor: pointer;
`;

export const SortCheckBox = styled.div<StyleType>`
  background-color: ${(props) => (props.$check ? 'black' : 'grey')};
  width: 15px;
  height: 15px;
  border-radius: 20px;
  cursor: pointer;
`;

//디폴트 마을 페이지

export const RootDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const HarfDiv = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: ${(props) => props.color};
  display: grid;
  place-items: center;
`;

export const Outline = styled.div`
  width: 85%;
  height: 90%;
  border: 15px solid white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChoiceImg = styled.div<StyleType>`
  position: relative;
  width: ${(props) => props.width};
  height: 165px;
`;

export const BackgroundArrowCircle = styled.div<StyleType>`
  width: 7vw;
  height: 7vw;
  border-radius: 50%;
  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.3);
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.$marginTop};
`;

export const RightSectionDiv = styled.div`
  width: 10vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const PagesDiv = styled.div`
  margin-top: 15vh;
  width: 8vw;
  height: 5vh;
  box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
