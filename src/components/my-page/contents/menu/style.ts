import { StyleType } from '@/types/style';
import styled from 'styled-components';

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

export const MenuModalBody = styled.div<StyleType>`
  width: 25vw;
  height: 70vh;
  background-color: #e9eff1;
  border: 1px solid #626262;
  border-radius: 30px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  margin: ${(props) => props.$margin};
`;

export const DisplayDiv = styled.div<StyleType>`
  position: ${(props) => (props.position ? props.position : 'relative')};
  display: flex;
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  margin: ${(props) => props.$margin};
  flex-direction: ${(props) => props.$flexDirection};
`;

export const Font = styled.div<StyleType>`
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.$margin};
  cursor: ${(props) => props.cursor};
  position: ${(props) => props.position};
`;

export const UserImg = styled.img`
  width: 6vw;
  height: 6vw;
  margin: 2vw 0 -1vw 0;
  border-radius: 50%;
  border: 15px solid white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const UiImg = styled.img`
  width: 2vw;
  height: 2vw;
  margin: 0.5vw;
`;

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

export const Img = styled.img<StyleType>`
  width: ${(props) => props.width};
  height: auto;
  margin: ${(props) => props.$margin};
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
`;

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

export const RightModalExit = styled.div`
  position: absolute;
  font-size: 1.5vw;
  color: #7f7f7f;
  margin-left: 22vw;
  margin-top: 2vw;
  z-index: 100;
  cursor: pointer;
`;

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

export const Margin = styled.div<StyleType>`
  margin: ${(props) => props.$margin};
`;
