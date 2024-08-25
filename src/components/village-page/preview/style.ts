'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

export const RootDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f0bb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerDiv = styled.div`
  margin-top: 2%;
  width: 90vw;
  height: 70vh;
  background-color: #fbf9e4;
  border-radius: 30px;
  box-shadow: 1px 1.5px 4px rgba(0, 0, 0, 0.3);
`;

export const previewRoomDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const previewMenuContainer = styled.div`
  width: 90%;
  height: 13%;
  display: flex;
  border-radius: 10px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  box-shadow: 1px 1.5px 4px rgba(0, 0, 0, 0.3);
`;

export const previewMenuDiv = styled.div`
  width: 98.5%;
  height: 84%;
  background-color: #fbf9e4;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MenuButtonDiv = styled.div<StyleType>`
  width: ${(props) => props.width};
  margin-left: ${(props) => props.$marginLeft};
  height: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const ImgStyle = styled.div<StyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.$marginLeft};
  margin-right: ${(props) => props.$marginRight};
  cursor: pointer;
  justify-self: center;
  position: relative;
`;
