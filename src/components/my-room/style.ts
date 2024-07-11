'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

export const RootDiv = styled.div<StyleType>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
`;

export const BackGroundGrid = styled(Grid)`
  grid-template-rows: 65% 35%;
`;
export const FloorAndWall = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
`;

export const ItemsGrid = styled(Grid)`
  grid-template-columns: 33.3% 33.4% 33.3%;
  grid-template-rows: 65%;
  align-items: center;
`;

export const DivElement = styled.div<StyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.margin_left};
  margin-right: ${(props) => props.margin_right};
  margin-top: ${(props) => props.margin_top};
  z-index: ${(props) => props.z_index};
`;

export const Place_1_4_5 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Place_4_5 = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;

export const Place_6_7_8 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const ItemImageSize = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
`;
