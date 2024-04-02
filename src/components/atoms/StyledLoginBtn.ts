'use client';

import styled from 'styled-components';

interface StyledLoginBtn {
    props?: string;
    url: string;
}

const StyledLoginBtn = styled.div<StyledLoginBtn>`
    width: 20%;
    height: 80%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props) => props.url});
    margin-top: 100px;
`;

export { StyledLoginBtn };
