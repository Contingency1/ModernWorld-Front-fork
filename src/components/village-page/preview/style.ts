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
  height: 90vh;
  background-color: #ffffff;
  border-radius: 50px;
`;

export const previewRoomDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const previewMenu = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10.65%;
`;

export const MenuButton = styled.div`
  width: 40%;
  height: 60%;
  margin: 2%;
  background-color: #d9d9d9;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    transition: 0.5s;
  }
`;

export const HeartAndExistImg = styled.img<StyleType>`
  width: 40px;
  height: 40px;
  margin-left: ${(props) => props.$marginLeft};
  margin-right: ${(props) => props.$marginRight};
  cursor: pointer;
`;
