'use client';

import styled from 'styled-components';

export const RootDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f69c7b;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const ContainerDiv = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: #9b8599;
  border-radius: 50px;
`;

export const previewRoomDiv = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const previewMenu = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuButton = styled.div`
  width: 30%;
  height: 60%;
  margin: 2%;
  background-color: #f69c7b;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2y_RSNsaULfecXO8MQ-qiO8dJEDE3SGCwFw&s);
  }
`;

export const HeartImg = styled.img`
  width: 40px;
  height: 40px;
`;
