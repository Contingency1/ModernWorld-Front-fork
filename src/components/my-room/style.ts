'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

/**
 * MyRoom 최상위 Div 입니다
 */
export const MyRoomRootDiv = styled.div<StyleType>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

/**
 * 기본 설정 그리드입니다 RootDiv의 그리드는 총 2개입니다
 * 배경 그리드와 아이템을 나누기 위한 아이템 그리드가 있습니다.
 */
export const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
`;

/**
 * 배경 그리드입니다
 */
export const BackGroundGrid = styled(Grid)`
  grid-template-rows: 65% 35%;
  align-items: center;
`;

/**
 * 벽지와 바닥지를 동시에 사용하는 컴포넌트입니다
 * color에 해시값을 넣어 사용합니다
 * @color : 색깔 해시값
 */
export const FloorAndWall = styled.div<StyleType>`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.$border};
`;

/**
 * 아이템을 정렬하기 위한 그리드립니다
 */
export const ItemsGrid = styled(Grid)`
  grid-template-columns: 33.3% 33.4% 33.33%;
  grid-template-rows: 65% 35%;
  align-items: center;
`;

export const DivElement = styled.div<StyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.$marginLeft};
  margin-right: ${(props) => props.$marginRight};
  margin-top: ${(props) => props.$marginTop};
  z-index: ${(props) => props.z_index};
`;

/**
 * 1, 4, 5번을 포함하는 부모 div입니다
 * 4번과 5번 위치 조정이 까다로워 1번, 4,5번을 묶어서 정렬했습니다
 */
export const Place_1_4_5 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

/**
 * 4, 5번을 포함하는 부모 div입니다
 */
export const Place_4_5 = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  margin-bottom: 100px;
`;

/**
 * 6, 7, 8번을 포함하는 부모 div입니다
 */
export const Place_7_8_9 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

/**
 * item place test
 * @margin_top : string
 */
export const ItemImageSize = styled.div<StyleType>`
  width: 8%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.$marginTop};
`;

/**
 * item size test
 */
export const ImageSize = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  z-index: 1;
`;

/**
 * 캐릭터 크기를 조정해주기 위한 컴포넌트입니다.
 */
export const CharacterImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  z-index: 1000;
  margin-bottom: 5%;
`;
