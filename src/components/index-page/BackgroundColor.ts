'use client';

import styled from 'styled-components';

interface BackgroundColor {
    props?: string;
    backgroundcolor?: string;
    display?: string;
}

const BackgroundColor = styled.div<BackgroundColor>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.backgroundcolor};
    display: ${(props) => props.display};
    align-items: center;
`;

export { BackgroundColor };
