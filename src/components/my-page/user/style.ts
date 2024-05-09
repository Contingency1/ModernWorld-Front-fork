"use client";
import styled from "styled-components";

/** Background Color CSS */
export const BodyContainer = styled.body`
  background-color: #c9d7dd;
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

interface OutLineSection {
  height?: string;
  width?: string;
}

/** 마이페이지 왼쪽 오른쪽 섹션 분리 */
export const OutLineSection = styled.div<OutLineSection>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

/** 캐릭터 이미지 및 닉네임 표시 */
export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 28.5vh;
  width: 100%;
  background-color: #e9eff1;
  border-radius: 20px;
`;

/** 캐릭터 이름 표시 */
export const NameSection = styled.div`
  margin-bottom: 2vh;
`;

/** 포인트 표시 구역 */
export const PointInfo = styled.div`
  height: 19vh;
  width: 100%;
  text-align: center;
  align-content: center;
  margin-top: 3vh;
  background-color: #e9eff1;
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

interface CategoryEle {
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
}

/** 카테고리 요소들 */
export const CategoryEle = styled.div<CategoryEle>`
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  background-color: #c9d7dd;
  text-align: center;
  align-content: center;
`;

export const PointHr = styled.hr`
  width: 80%;
`;
