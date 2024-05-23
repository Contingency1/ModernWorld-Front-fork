"use client";
import styled from "styled-components";

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

interface ContentsView {
  height?: string;
}

/** 받은/보낸 item 설명 & 받은 아이템 목록 보여주는 fff div */
export const ContentsView = styled.div<ContentsView>`
  width: 25vw;
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height};
  margin: 2vh 0;
  border-radius: 30px;
  background-color: #fff;
`;

interface UserInfo {}

/** ##님에게 ##습니다. 를 담는 div*/
export const UserInfo = styled.div<UserInfo>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
`;

interface MarginSpan {
  margin?: string;
  fontSize?: string;
  color?: string;
}

/** margin 값을 줄 수 있는 div 스타일 */
export const MarginDiv = styled.div<MarginSpan>`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
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
  margin-bottom: 10vh;
`;

interface FontSize {
  fontSize?: string;
}
/** font size 설정하는 div */
export const FontSize = styled.div<FontSize>`
  font-size: ${(props) => props.fontSize};
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
