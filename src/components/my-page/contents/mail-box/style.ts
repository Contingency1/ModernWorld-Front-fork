"use client";
import styled from "styled-components";

/**mail box layout 그리드 설정  */

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: #e9eff1;
  border-radius: 30px;
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
  border: 1px solid #000;
  border-radius: 30px;
`;

interface ContentsView {
  height?: string;
}

/** 받은/보낸 item 설명 & 받은 아이템 목록 보여주는 fff div */
export const ContentsView = styled.div<ContentsView>`
  width: 20vw;
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
}

/** margin 값을 줄 수 있는 div 스타일 */
export const MarginDiv = styled.div<MarginSpan>`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
`;
