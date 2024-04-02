'use client';

import styled from 'styled-components';

interface StyledBackgroundColor {
    props?: string;
    backgroundcolor?: string;
}

const StyledBackgroundColor = styled.div<StyledBackgroundColor>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.backgroundcolor};
`;

export { StyledBackgroundColor };
