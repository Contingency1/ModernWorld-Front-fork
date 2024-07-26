'use client';

import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9eff1;
  border-radius: 20px;
`;

export const UserImage = styled.img`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  object-fit: cover;
  border: 15px solid white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
