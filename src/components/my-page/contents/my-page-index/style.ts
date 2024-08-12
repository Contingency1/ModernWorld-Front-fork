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
  isProfileClick?: boolean;
}

/** 유저 사진 띄워 주는 콘테이너 */
export const UserImageContainer = styled.div<UserImageContainerProps>`
  position: relative;
  width: 9vw;
  height: 9vw;
  margin-top: -45vh;
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
      props.isProfileClick
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
      width: 5rem;
      height: 1rem;
      background-color: rgba(255, 255, 255, 0.8);
      border: 3px solid #c8c8c8;
      border-radius: 5px;
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
export const UserInfoSection = styled.div`
  width: 80%;
  height: 55%;
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
`;

/** font css */
export const Font = styled.div<StyleType>`
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.$margin};
  cursor: ${(props) => props.cursor};
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
