import { StyleType } from '@/types/style';
import styled from 'styled-components';

export const RootDiv = styled.div<StyleType>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 150px;
  right: 3%;
  bottom: 3%;
  background-color: #ffffff;
  border-radius: 15px;
  animation: slideInOut 3s ease-in-out forwards;
  box-shadow: 1px 1px 4px rgb(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const CrossAndTitleDiv = styled.div`
  display: flex;
`;

export const CrossImage = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  animation: rotate 2s linear infinite;
  transform-origin: 50% 50%;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ContentDiv = styled.div`
  width: 450px;
  height: 80px;
  border-radius: 47.5px;
  background-color: #ffeeee;
  box-shadow: inset 1px 1px 4px rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8vw;
`;
