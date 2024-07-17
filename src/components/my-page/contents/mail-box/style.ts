'use client';

import styled from 'styled-components';
import { StyleType } from '@/types/style';

/**mail box layout 그리드 설정  */
export const Grid = styled.div`
  width: 250%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-radius: 30px;
  background-color: #e9eff1;
`;

/** 왼쪽 오른쪽 섹션 구분 + display:flex 적용 */
export const MailBoxSection = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px;
`;

/** 받은/보낸 item 설명 & 받은 아이템 목록 보여주는 fff div */
export const ContentsView = styled.div<StyleType>`
  width: 25vw;
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height};
  margin: 2vh 0;
  border-radius: 30px;
  background-color: #fff;
`;

/** ##님에게 ##습니다. 를 담는 div*/
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
`;

/** margin 값을 줄 수 있는 div 스타일 */
export const MarginDiv = styled.div<StyleType>`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
`;

/** ItemInfo 에 있는 삭제 버튼 담는 섹션 */
export const DelSection = styled.div`
  margin-top: 2vh;
  margin-right: 2vh;
  display: flex;
  justify-content: right;
`;

/** ItemImg 담을 섹션 */
export const ItemImg = styled.div`
  margin-top: -3.5vh;
`;

/** font size 설정하는 div */
export const FontSize = styled.div<StyleType>`
  font-size: ${(props) => props.fontSize};
  margin: 1px;
`;

/** 아이템 상태 표시 div */
export const StatusFont = styled.div<StyleType>`
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: right;
  margin: 0 1.5vw;
  color: #535353;
`;

/** 아이템 수락/거절 div */
export const ItemApprovalControls = styled.div<StyleType>`
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: space-between;
  margin: 0 1.5vw;
  & > div:first-child {
    color: #3a3ea0;
    font-size: 18px;
  }

  & > div:last-child {
    color: #ff5252;
    font-size: 18px;
  }
`;

/** Item List 스크롤 div */
export const ListScroll = styled.div`
  height: 100%;
  overflow-y: auto;
`;

/** 아이템 리스트를 담는 div */
export const ItemListEleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
