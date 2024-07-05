'use client';
import styled from 'styled-components';
import { StyleType } from '@/types/style';

/** 페이지네이션 담는 div */
export const PageSection = styled.div<StyleType>`
  grid-column: 1 / -1;
  width: ${(props) => props.width};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;
