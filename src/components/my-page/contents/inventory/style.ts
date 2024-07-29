'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { StyleType } from '@/types/style';

/** 인벤토리 / 상점 그리드 설정 */
export const BookMarkBox = styled.div<StyleType>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 6vh;
  padding: 5vh 10vw;
  width: 180vw;
  height: ${(props) => props.height};
  background-color: ${(props) => props.$backColor};
  /* background-color: #e9eff1; */
  border-radius: 20px;
`;

/** 인벤토리의 각 아이템 넣을 div */
export const ItemDiv = styled.div`
  height: 80%;
  width: 85%;
  padding: 15%;
  background-color: #fff;
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
`;

/** Link 태그 style */

export const LinkBox = styled(Link)`
  text-decoration-line: none;
`;

/** 각 아이템 이미지 넣을 태그 */
export const Img = styled.div<StyleType>`
  width: 95%;
  height: 95%;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
  object-position: center;
`;

export const StatusCheck = styled.div<StyleType>`
  width: 6px;
  height: 6px;
  margin-left: 6.5vw;
  margin-top: -0.6vh;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

/** 모달창 background */
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* 모달 배경을 어둡게 */
  z-index: 1000; /* 다른 콘텐츠보다 위에 위치 */
`;

/** 모달창 body */
export const ModalBody = styled.div`
  width: 100%;
  max-width: 600px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 11.15vw;
  margin-top: 5vh;
  border-radius: 30px;
  background-color: rgba(210, 197, 161, 0.7); /* 모달 배경을 반투명으로 */
  padding: 20px;
  z-index: 1001; /* 모달 배경 위에 위치 */
  border: 1px solid #7b7b7b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

/** 모달창 안에 아이템 칸 */
export const ModalItemDiv = styled.div`
  width: 8vw;
  height: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  margin-bottom: 0.5vw;
  position: relative;
  z-index: 2;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1);
`;

/** 모달창 안에 버튼 들어갈 div */
export const ModalButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

/** 모달창 안에 아이템 이름과 설명 div */
export const ModalFont = styled.div`
  font-size: 18px;
  margin: 0.5vw;
`;

/** 모달창 안에 있는 버튼 */
export const ModalInButton = styled.div`
  width: 8vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 0 0.3vh 0;
  margin: 1vh;
  font-size: 18px;
  border-radius: 15px;
  background-color: #ffb1b1;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #ff7070;
    cursor: pointer;
  }
`;

/** 모달창 나가기 버튼 */
export const ModalExit = styled.div<StyleType>`
  width: 8vh;
  height: 8vh;
  position: absolute;
  right: 1vw;
  bottom: 3vh;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
  object-position: center;

  &:hover {
    cursor: pointer;
  }
`;

/** 선물 보낼 유저 입력 UI */
export const GiftPageUserInput = styled.input`
  width: 22vw;
  height: 2.4vh;
  background-color: #ffdede;
  border: 2px solid #ffffff;
  padding: 10px;
  margin: 1vh;
  font-size: 18px;
  color: #696969;
  outline: none;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
