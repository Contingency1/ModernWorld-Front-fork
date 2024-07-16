'use client';

import styled from 'styled-components';

export const RootDiv = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148909257.jpg?t=st=1721107518~exp=1721111118~hmac=b6a56a476b8bc50298c3ee99d6fed0bf50860338f5d58da3ee276cbb4a447d4f&w=996);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerDiv = styled.div`
  width: 90vw;
  height: 85vh;
`;

export const previewRoomDiv = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 50px;
`;

export const previewMenu = styled.div`
  width: 100%;
  height: 20%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuButton = styled.div`
  width: 30%;
  height: 80%;
  margin: 20px;
  background-color: green;
`;
