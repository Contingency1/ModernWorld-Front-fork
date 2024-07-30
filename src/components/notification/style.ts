import { StyleType } from '@/types/style';
import styled from 'styled-components';

interface type1 {
  display: boolean;
}

export const NotificationDiv = styled.div<type1>`
  display: ${({ display }) => (display ? 'flex' : 'none')};
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
  background-color: green;
  position: absolute;
  z-index: 1000;
  color: red;
  font-size: 100px;
`;

export const ColumnReverseDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
`;

export const RowReverseDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
