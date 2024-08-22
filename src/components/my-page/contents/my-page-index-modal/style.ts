import { StyleType } from '@/types/style';
import styled from 'styled-components';

/** 메뉴 모달창 뒤에 검은 배경 */
export const MenuModalBackground = styled.div`
  width: 73.7%;
  height: 100%;
  position: absolute;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

/** 메뉴 모달 창 바디 */
export const MenuModalBody = styled.div<StyleType>`
  width: ${(props) => (props.width ? props.width : '25vw')};
  height: 70vh;
  background-color: #e9eff1;
  border: 1px solid #626262;
  border-radius: 30px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  margin: ${(props) => props.$margin};
`;

/** display flex css 주기 위한 스타일 컴포넌트 */
export const DisplayDiv = styled.div<StyleType>`
  position: ${(props) => (props.position ? props.position : 'relative')};
  display: flex;
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  margin: ${(props) => props.$margin};
  flex-direction: ${(props) => props.$flexDirection};
  overflow-y: ${(props) => props.$overFlowY};
`;

/** 폰트 사용시 필요한 컴포넌트 */
export const Font = styled.div<StyleType>`
  width: ${(props) => props.width};
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.$margin};
  cursor: ${(props) => props.cursor};
  position: ${(props) => props.position};
`;

/** 유저 이미지 보여주는 태그 */
export const UserImg = styled.img<StyleType>`
  width: ${(props) => (props.width ? props.width : '6vw')};
  height: ${(props) => (props.width ? props.width : '6vw')};
  margin: ${(props) => (props.$margin ? props.$margin : '2vw 0 -1vw 0')};
  border-radius: 50%;
  border: ${(props) => (props.$border ? props.$border : '15px solid white')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

/** UI img 태그 */
export const UiImg = styled.img`
  width: 2vw;
  height: 2vw;
  margin: 0.5vw;
`;

/** 버튼 Ui 가 들어가는 div */
export const ButtonUi = styled.div<StyleType>`
  width: 22vw;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  opacity: ${(props) => props.$defaultOpacity || 0.5};
  background-color: #fff;
  border: 5px solid #9d9d9d;
  border-radius: 15px;
  margin: ${(props) => props.$margin};
  box-sizing: border-box;
  padding-bottom: 0.5vw;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s ease;
  cursor: ${(props) => (props.$cursor ? props.$cursor : 'pointer')};

  &:hover {
    opacity: 1;
  }
`;

/** 콘텐츠 들어가는 콘테이너 */
export const ContentContainer = styled.div`
  width: 22vw;
  height: 49.5vh;
  margin: 0.5vw 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

/** 이미지 태그로 사용 */
export const Img = styled.img<StyleType>`
  width: ${(props) => props.width};
  height: auto;
  margin: ${(props) => props.$margin};
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
`;

/** 로그아웃 버튼 UI */
export const LogoutButtonUi = styled.div<StyleType>`
  width: 18vw;
  height: 6vh;
  margin: ${(props) => props.$margin};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #343434;
  font-size: 14px;
  background-color: ${(props) => props.$backColor};
  border-radius: 10px;
  border: 5px solid #dfdfdf;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

/** 옆에 x */
export const RightModalExit = styled.div`
  position: absolute;
  font-size: 1.5vw;
  color: #7f7f7f;
  margin-left: 22vw;
  margin-top: 2vw;
  z-index: 100;
  cursor: pointer;
`;

/** 알람 모달창 리스트 하나의 요소 */
export const AlarmListEleBox = styled.div<StyleType>`
  width: ${(props) => props.width};
  height: 6vh;
  margin: ${(props) => props.$margin};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backColor};
  border: 4px solid #dfdfdf;
  border-radius: 10px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  font-size: 11px;
  color: #343434;
  cursor: ${(props) => props.cursor};
  padding: 0.5vw;
  box-sizing: border-box;
`;

/** 마진값 주는 css */
export const Margin = styled.div<StyleType>`
  margin: ${(props) => props.$margin};
`;

/** 좋아요 리스트 들어가는 섹션 */
export const LikeListSection = styled.div`
  width: 90%;
  height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

/** 좋아요 리스트 하나의 요소 콘테이너 */
export const LikeListContainer = styled.div<StyleType>`
  width: 26vw;
  margin: 0.5vw 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
  border-radius: 15px;
  box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  max-height: 10.5vh;
  min-height: 10.5vh;
`;

/** 좋아요 리스트 방 보러가기 버튼 UI */
export const GoToRoomButton = styled.div`
  position: fixed;
  width: 5vw;
  height: 4vh;
  flex-grow: 1;
  max-width: 5vw;
  min-width: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 19.6vw;
  background-color: #fff;
  border: 3px solid #c9d7dd;
  border-radius: 10px;
  font-size: 12px;
  color: #454545;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

/** 좋아요 표시 할 hr 태그 */
export const Hr = styled.hr<StyleType>`
  border: none;
  height: 0.5vh;
  width: 9.7vw;
  background-color: #6e6e6e;
  margin: ${(props) =>
    props.$margin === 'receiver' ? '-1vw 0 1.5vw 4vw' : '-1vw 0 1.5vw 16.2vw'};
  opacity: 0.7;
  border-radius: 1px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;
