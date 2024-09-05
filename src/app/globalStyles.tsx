'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'NeoDGM', sans-serif;
  }
`;

export default function GlobalStyleWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
