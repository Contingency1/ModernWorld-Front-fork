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
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.2);
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
