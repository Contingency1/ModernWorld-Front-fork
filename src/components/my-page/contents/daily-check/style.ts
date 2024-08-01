'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

export const Background = styled.div<StyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.$backColor};
  border-radius: 20px;
`;

export const ContentSection = styled.div<StyleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Font = styled.div<StyleType>`
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.$margin};
  text-align: center;
  z-index: 1;
`;

export const CheckButton = styled.div`
  width: 9vw;
  height: 6vh;
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  border: 4px solid #797979;
  border-radius: 20px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:active {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const DayCheckBoxSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3vh 0;
`;

export const EmojiViewer = styled.div`
  width: 5vw;
  height: 5.5vw;
  margin: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 20px;
  box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.2);
`;

export const MoodSelectorSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 35%;
  border: 1px solid #d8d8d8;
  border-radius: 20px;
`;

export const Hr = styled.hr`
  width: 80%;
  border: 2px solid #000;
  margin-top: 5vh;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
`;

export const EmojiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 25vw;
`;

export const EmojiKey = styled.div<StyleType>`
  width: 4vw;
  height: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  margin: 1vh;
  border: ${(props) => (props.isSelected ? '6px' : '1px')} solid #8f8f8f;
  border-radius: 15px;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  box-sizing: border-box;
`;
export const ColumnContainer = styled.div<StyleType>`
  margin: ${(props) => props.$margin};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
