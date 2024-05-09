"use client";
import styled from "styled-components";

/** 콘텐츠들이 표시될 오른쪽 구역 Div full */
export const ContentSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

/** 인벤토리 header */
export const InventoryHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  margin-left: 1vw;
`;

/** 인벤토리 body */
export const InventoryBody = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

/** 인벤토리 sidebar */
export const InventorySide = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`;

/** 인벤토리 위의 책갈피 메뉴 */
export const TMenuDiv = styled.div`
  height: 8vh;
  width: 8vw;
  background-color: #7c80c8;
  border-radius: 20px 20px 0px 0px;
  flex-direction: row;
  align-content: center;
  font-size: 25px;
`;

/** 인벤토리 옆의 책갈피 메뉴 */
export const RMenuDiv = styled.div`
  height: 14vh;
  width: 4.5vw;
  background-color: #7c80c8;
  border-radius: 0px 20px 20px 0px;
  align-content: center;
  writing-mode: vertical-rl;
  font-size: 25px;
`;

/** 인벤토리 내용물 들어갈 div */
export const InventoryBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 0.1fr;
  gap: 5vh;
  padding: 5vh 12vw;
  width: 180vw;
  height: 65vh;
  background-color: #e9eff1;
  border-radius: 20px;
`;

/** 인벤토리 각 아이템 넣을 div */
export const ItemDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
`;

/** 페이지네이션 */
export const PageSection = styled.div`
  grid-column: 1 / -1;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;
