import { StyleType } from '@/types/style';
import styled from 'styled-components';

/** 모달창 백그라운드 */
export const ItemClickBackground = styled.div`
  position: fixed;
  width: 68.5%;
  height: 91%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f0e2;
  border-radius: 20px;
`;

/** 이미지 태그 */
export const Img = styled.img<StyleType>`
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.$margin};
  cursor: ${(props) => props.cursor};
`;

/** 아이템 사진 들어갈 div */
export const ItemContainer = styled.div`
  width: 9vw;
  height: 9vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

/** font css */
export const Font = styled.div<StyleType>`
  position: ${(props) => props.position};
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.$margin};
  cursor: ${(props) => props.cursor};
`;

/** display div */
export const DisplayDiv = styled.div<StyleType>`
  display: flex;
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-direction: ${(props) => props.$flexDirection};
  margin: ${(props) => props.$margin};
`;

/** 선물 보내기 버튼 css */
export const Button = styled.button<StyleType>`
  width: 9vw;
  height: 6vh;
  margin: ${(props) => (props.$margin ? props.$margin : '2vw 0.5vw')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backColor};
  border-radius: 20px;
  border: 3px solid #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  cursor: pointer;
  font-family: 'NeoDGM', sans-serif;
  &:disabled {
    cursor: not-allowed;
  }
`;

/** 선물 보내는 UI 창 body */
export const GiftUiBody = styled.div`
  width: 40vw;
  height: 25vh;
  margin: 2vw 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 4px solid #fff;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

/** 선물할 유저 닉네임 검색하는 input */
export const UserNameSearchBar = styled.input`
  width: 30vw;
  height: 2vh;
  padding: 1vw;
  font-size: 16px;
  color: #454545;
  background-color: #fff;
  font-family: 'NeoDGM', sans-serif;
  border-radius: 50px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
`;
