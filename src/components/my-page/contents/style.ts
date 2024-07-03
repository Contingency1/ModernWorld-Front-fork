'use client';

import styled from 'styled-components';
import { styleType } from '@/types/style';

/** 콘텐츠들이 표시될 오른쪽 구역 Div full */
export const ContentSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

/** 북마크가 존재하는 Div 의 header */
export const BookMarkHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  margin-left: 1vw;
`;

/** 북마크가 존재하는 Div 의 body */
export const BookMarkBody = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

/** 북마크가 존재하는 Div 의 sidebar */
export const BookMarkSide = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4vh;
`;

/** 북마크가 존재하는 Div 의 위의 책갈피 메뉴 */
export const TMenuDiv = styled.div<styleType>`
  height: 8vh;
  width: 8vw;
  background-color: ${(props) => props.color};
  color: #fff;
  border-radius: 20px 20px 0px 0px;
  flex-direction: row;
  align-content: center;
  font-size: 25px;
  cursor: pointer;
`;

/** 북마크가 존재하는 Div 의 옆의 책갈피 메뉴 */
export const RMenuDiv = styled.div<styleType>`
  height: 16vh;
  width: 4.5vw;
  background-color: ${(props) => props.color};
  color: #fff;
  border-radius: 0px 20px 20px 0px;
  align-content: center;
  writing-mode: vertical-rl;
  font-size: 25px;
  cursor: pointer;
`;

/** 북마크가 존재하는 내용물 들어갈 div */
export const BookMarkBox = styled.div<styleType>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 0.1fr;
  gap: 5vh;
  padding: 5vh 12vw;
  width: 180vw;
  height: ${(props) => props.height};
  background-color: #e9eff1;
  border-radius: 20px;
`;

/** 인벤토리의 각 아이템 넣을 div */
export const ItemDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
`;

/** 페이지네이션 */
export const PageSection = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`;
