'use client';

import styled from 'styled-components';

interface StyledMainPowerBtn {
    width?: number;
    height?: number;
}

const StyledMainPowerBtn = styled.div<StyledMainPowerBtn>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://wang0514.s3.ap-northeast-2.amazonaws.com/page/power.png);
    filter: drop-shadow(5px 2px 2px grey);
`;

export { StyledMainPowerBtn };
