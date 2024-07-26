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

/** index page 유저 사진 */
export const UserImage = styled.img`
  width: 9vw;
  height: 9vw;
  margin-top: -45vh;
  border-radius: 50%;
  object-fit: cover;
  border: 15px solid white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  margin: 0 0.3vw;
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
`;

/** 강조 텍스트 */
export const AccentText = styled.div`
  font-size: 50px;
`;
