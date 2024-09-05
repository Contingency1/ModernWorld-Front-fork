'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

/** index 기본 body */
export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e9eff1;
  border-radius: 20px;
`;

interface UserImageContainerProps {
  $isProfileClick?: boolean;
  marginTop?: string;
}

/** 유저 사진 띄워 주는 콘테이너 */
export const UserImageContainer = styled.div<UserImageContainerProps>`
  position: relative;
  width: 9vw;
  height: 9vw;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '-45vh')};
  border-radius: 50%;
  border: 15px solid white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(props) =>
      props.$isProfileClick
        ? 'brightness(50%)'
        : 'brightness(100%)'}; // 클릭 상태에 따른 필터 적용
  }

  .button-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
      width: 6.5rem;
      height: 1.1rem;
      background-color: rgba(255, 255, 255, 0.8);
      border: 3px solid #c8c8c8;
      border-radius: 6px;
      padding: 0.3rem;
      cursor: pointer;
      font-size: 13px;
      text-align: center;
      line-height: 1.5;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 1);
      }
    }
  }
`;

export const UserInfoContentSection = styled.div<StyleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: row;
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: 5vh;
`;

export const UserInfoContent = styled.div<StyleType>`
  width: ${(props) => props.width};
  margin: ${(props) => (props.$margin ? props.$margin : '0 0.3vw')};
  display: flex;
  justify-content: ${(props) =>
    props.$textAlign === 'center' ? 'center' : 'flex-start'};
  align-items: center;
  height: 6vh;
  background-color: ${(props) => props.$backColor};
  border-radius: 15px;
  border: 0.8px solid
    ${(props) => (props.$backColor === '#D7E7FF' ? '#458FFF' : '#ff3131')};
  padding-left: ${(props) => (props.$textAlign === 'center' ? 'null' : '1vw')};
  box-sizing: border-box;
`;

/** index Page info Section */
export const UserInfoSection = styled.div<StyleType>`
  width: 80%;
  height: ${(props) => (props.height ? props.height : '55%')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 15vh;
  background-color: #fff;
  border-radius: 20px;
`;

export const StatSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: -15vh;
`;

/** index Page 좋아요, 방문, 우편 수 보여주는 동그라미 ui */
export const StatBadge = styled.div`
  width: 8vw;
  height: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2vw;
  border-radius: 50%;
  border: 15px solid white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;

  &&:hover {
    cursor: pointer;
  }
`;

/** 강조 텍스트 */
export const AccentText = styled.div`
  font-size: 50px;
`;

/** edit Text Input UI */
export const EditInput = styled.input<StyleType>`
  width: ${(props) => props.width};
  margin: 0 0.3vw;
  height: 6vh;
  background-color: ${(props) => props.$backColor};
  border-radius: 15px;
  border: 0.8px solid
    ${(props) => (props.$backColor === '#D7E7FF' ? '#458FFF' : '#ff3131')};
  padding-left: 1vw;
  font-family: 'NeoDGM', sans-serif;
  box-sizing: border-box;
  outline: none;
`;

/** 수정 버튼 */
export const EditText = styled.span`
  position: absolute;
  right: 10px;
  font-size: 16px;
  color: #585858;
  padding-right: 0.5vw;
  cursor: pointer;
`;

/** 설명 나오게 하는 img 태그 */
export const Arrow = styled.img<StyleType>`
  width: ${(props) => props.width};
  margin-left: auto;
  margin-right: 1vw;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
  cursor: pointer;
`;

/** font css */
export const Font = styled.div<StyleType>`
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.$margin};
  cursor: ${(props) => props.cursor};
  line-height: 1.8;
`;

/** 서비스 정보 페이지에 있는 서비스 내용들 들어갈 div */
export const ServiceInfoContainer = styled.div`
  width: 45vw;
  height: 30vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: -25vh;
  padding: 1vw;
  overflow-y: auto;
`;

/** 서비스 설명 container */
export const ServiceDescriptionContainer = styled.div`
  width: 38vw;
  padding: 0.5vw;
`;

/** 나의 업적 표시 container */
export const AchievementViewContainer = styled.div`
  width: 45vw;
  height: 35vh;
  margin-bottom: -35vh;
  padding: 0.5vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;

/** 업적 1개 container */
export const AchievementEleContainer = styled.div`
  position: absolute;
  width: 700px;
  height: 220px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: -16vh;
  overflow-y: auto;
  box-sizing: border-box;
`;

/** flex 방향 */
export const DirectionDiv = styled.div<StyleType>`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: ${(props) => props.flex};
  margin: ${(props) => props.$margin};
`;

/** 업적명 들어가는 동그라미 div */
export const AchievementBadge = styled.div`
  width: 8vh;
  height: 8vh;
  background-color: #fff;
  border: 10px solid #b3daf1;
  font-size: calc(0.8vw + 0.8vh);
  color: #363a8d;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** 체크버튼 */
export const CheckUi = styled.div`
  width: 1vh;
  height: 1vh;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: 1px solid #5b5b5b;
  margin: 0.5vw 0.5vw 0 0;
`;

/** 체크 버튼 옆 font UI */
export const AchievementListFont = styled.div<StyleType>`
  font-size: calc(0.8vw + 0.8vh);
  color: ${(props) => props.color};
  margin: 0.5vw 1vw;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`;

/** 체크 표시 img */
export const CheckImg = styled.img`
  position: relative;
  width: 2vh;
  height: 2vh;
  margin-left: -0.9vw;
  z-index: 1;
`;
