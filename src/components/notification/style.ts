import styled from 'styled-components';

export const OnclickDiv = styled.div`
  cursor: pointer;
`;

export const RootDiv = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 150px;
  right: 0;
  bottom: 0;
  background-color: #ffcccb;
  border-radius: 15px;
  opacity: 0.8;
  animation: slideInOut 3s ease-in-out forwards;
`;

export const CrossAndTitleDiv = styled.div`
  display: flex;
`;

export const TitleDiv = styled.div`
  position: absolute;
  font-weight: bold;
  left: 10px;
  top: 15px;
`;

export const CrossImage = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  animation: rotate 2s linear infinite;
  transform-origin: 50% 50%;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ContentDiv = styled.div`
  width: 70%;
  height: 20%;
  position: absolute;
  left: 50px;
  top: 50%;
`;
