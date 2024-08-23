'use cltent';

import styled from 'styled-components';

export const RootDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

export const ModalRootDiv = styled.div`
  width: 330px;
  height: 500px;
  background-color: #ffffffbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  position: relative;
  margin-left: 2%;
  margin-top: 10%;
  position: absolute;
  z-index: 3;
  box-shadow: 1px 5px 8px rgba(0, 0, 0, 0.3);
`;

export const TitleDiv = styled.div`
  width: 96px;
  font-size: 24px;
  margin-top: 5vh;
  color: #00000080;
`;

export const CloseButton = styled.div`
  font-size: 25px;
  position: absolute;
  top: 2%;
  right: 5%;
  cursor: pointer;
`;

export const LikeListRootDiv = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  overflow-y: auto;
  margin-bottom: 5%;
`;

export const ListRootDiv = styled.div`
  width: 90%;
  padding: 9% 0px;
  border-radius: 20px;
  background-color: #ffffff;
  margin-top: 4%;
  box-shadow: inset 1px 1.5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeartImgdiv = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 10%;
  position: relative;
`;

export const CommentDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-left: 10%;
  font-size: 16px;
`;
