'use client';

import styled from 'styled-components';

interface MainLogo {
    props?: string;
    grid1?: string | number;
    grid2?: string | number;
    grid3?: string | number;
    grid4?: string | number;
}

const MainLogo = styled.div<MainLogo>`
    width: 95wh;
    height: 100vh;
    background-size: 90% 110%;
    background-position: center;
    background-image: url('https://wang0514.s3.ap-northeast-2.amazonaws.com/page/mainLogo.png');
    background-repeat: no-repeat;
    grid-template-rows: ${(props) => props.grid1} ${(props) => props.grid2} ${(props) => props.grid3} ${(props) =>
            props.grid4};
    display: grid;
    place-items: center;
`;

export { MainLogo };
