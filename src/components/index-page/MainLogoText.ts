'use client';

import styled from 'styled-components';

interface MainLogoTextProps {
    width?: number;
    height?: number;
    fontSize?: number;
    margintop?: number;
    textshadow?: number;
}

const MainLogoText = styled.div<MainLogoTextProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    font-size: ${(props) => props.fontSize}rem;
    margin-top: ${(props) => props.margintop}px;
    text-shadow: 4px 4px 4px white;
`;

export { MainLogoText };
