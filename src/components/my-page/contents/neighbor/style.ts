import { StyleType } from '@/types/style';
import styled from 'styled-components';

/** 기본 배경이 되는 div */
export const DefaultDiv = styled.div`
  width: 250%;
  height: 100%;
  border-radius: 30px;
  background-color: #e9eff1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

/** user 리스트 공간 */
export const UserListSection = styled.div`
  width: 80%;
  height: 24%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 -5vw;
`;

/** 페이지 넘기는 공간 */
export const PaginationSection = styled.div<StyleType>`
  grid-column: 1 / -1;
  width: ${(props) => props.width};
  margin: ${(props) => props.$margin};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

/** 유저 리스트에 있는 유저 사진 스타일 */
export const UserImg = styled.img`
  width: 6.5vw;
  height: 6.5vw;
  border-radius: 30px;
  border: 1px solid #8888;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

/** 유저 리스트에서 글자가 들어가는 공간 */
export const FontSection = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-left: 2vw;
  width: 60%;
  & :hover {
    color: #000;
  }
`;

/** font css */
export const Font = styled.div<StyleType>`
  font-size: ${(props) => props.$fontSize};
  color: #454545;
  margin: ${(props) => props.$margin};
`;

/** column 공간 */
export const ColumnSection = styled.div<StyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: ${(props) => props.$margin};
`;

/** 버튼 css */
export const Button = styled.div`
  width: 8vw;
  height: 2.3vw;
  margin: 0.1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #454545;
  font-size: 18px;
  background-color: #ffffff;
  border: 3px solid #c9d7dd;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

/** 텍스트 정렬을 위한 display */
export const RowDiv = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row;
`;

/** 친구 수락하는 UI 를 담을 공간 */
export const ManageSection = styled.div`
  width: 90%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.2);
`;

/** 친구 신청 닉네임 검색 창 */
export const UserSearchBar = styled.input`
  width: 80%;
  height: 5%;
  color: #454545;
  font-size: 18px;
  padding: 1.5vw;
  border-radius: 35px;
  background-color: #e9e9e9;
  border: none;
  outline: none;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.2);
`;

/** 친구 요청 버튼 정렬을 위한 Div (중복이 너무 많아서 수정 필요) */
export const DisplayDiv = styled.div<StyleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flex};
  margin: ${(props) => props.$margin};
`;
