'use client';

import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100wh;
    height: 100vh;
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

export const WallPaper = styled.div`
    background-color: #b5e4ff;
    width: 100%;
    height: 100%;
`;

export const Floor = styled.div`
    background-color: #d5f0ff;
    width: 100%;
    height: 100%;
`;

export const ItemsGrid = styled(Grid)`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 65% 35%;
    align-items: center;
`;
