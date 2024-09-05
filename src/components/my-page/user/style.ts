'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { StyleType } from '@/types/style';

/** Background Color CSS */
export const BodyContainer = styled.div<StyleType>`
  background-color: ${(props) => props.color};
  width: 100vw;
  height: 100vh;
`;

/** 최상단 Div 에 grid 적용 */
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-gap: 2vw;
  position: fixed; //위치 고정
  top: 50%; //가운데 위치하게끔 만들어줌
  left: 50%;
  transform: translate(-50%, -50%);
`;

/** 마이페이지 왼쪽 오른쪽 섹션 분리 */
export const OutLineSection = styled.div<StyleType>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

/** 캐릭터 이미지 및 닉네임 표시 */
export const CharacterInfo = styled.div<StyleType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 28.5vh;
  width: 100%;
  background-color: ${(props) => props.color};
  border-radius: 20px;
`;

/** 캐릭터 이름 표시 */
export const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
`;

/** 포인트 표시 구역 */
export const PointInfo = styled.div<StyleType>`
  height: 19vh;
  width: 100%;
  text-align: center;
  align-content: center;
  margin-top: 3vh;
  background-color: ${(props) => props.color};
  border-radius: 20px;
`;

/** 포인트 */
export const PointTitle = styled.div`
  margin-bottom: 2px;
  font-size: 12px;
  color: #606060;
`;
export const PointContent = styled.div`
  font-size: 22px;
`;

/** 카테고리 메뉴 표시 구역 (grid 적용) */
export const CategorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1px;
  height: 28.5vh;
  width: 100%;
  margin-top: 3vh;
`;

/** 카테고리 요소들 */
export const CategoryEle = styled.div<StyleType>`
  border-top: ${(props) => props.$borderTop};
  border-bottom: ${(props) => props.$borderBottom};
  border-left: ${(props) => props.$borderLeft};
  border-right: ${(props) => props.$borderRight};
  text-align: center;
  align-content: center;
`;

/** 카테고리 요소의 각 링크 태그 */
export const LinkBox = styled(Link)<StyleType>`
  color: ${(props) => props.color || '#696969'};
  text-decoration-line: none;

  &:hover {
    color: #414141;
  }
`;

/** 구분선 */
export const PointHr = styled.hr`
  width: 80%;
`;

/** 업적 font */
export const Font = styled.div<StyleType>`
  margin-left: 0.5vw;
  font-size: 14px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

/** Copyright ⓒ 넣을 곳 */
export const Copyright = styled.div`
  position: fixed;
  font-size: 0.8vw;
  text-align: right;
  color: #767676;
  bottom: 0;
  right: 0;
  margin: 1vw 11.5vw 0.5vw 0;
`;
