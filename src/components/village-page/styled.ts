'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

export const BackgroundDisplay = styled.div<StyleType>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
`;

export const ExitButton = styled.img`
  position: absolute;
  top: 2%;
  right: 2%;
  width: 40px;
  height: 40px;
  cursor: pointer;
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
  img {
    width: 10%;
    height: 100%;
  }
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
export const LeftArrow = styled.div`
  margin-top: 14%;
  padding-left: 5%;
  cursor: pointer;
`;
/**
 * 유저들을 8명씩 보여주는 박스
 */
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
/**
 * 오른쪽 화살표
 */
export const RightArrow = styled.div`
  margin-top: 200%;
  margin-left: 12%;
  cursor: pointer;
`;

/**
 * 유저 한명의 박스
 */
export const UserBox = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
/**
 * 유저 박스 안에 들어있는 캐릭터 사진
 */
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
  img {
    width: 10px;
    height: 10px;
  }
`;

export const SortCheckBox = styled.div<StyleType>`
  background-color: ${(props) => (props.$check ? 'pink' : 'grey')};
  width: 100px;
  height: 50px;
  border-radius: 20px;
  margin-top: 10%;
  margin-left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-style: 1px solid black;
  &:hover {
    background-color: 'red';
    transition: 0.5s;
  }
`;
