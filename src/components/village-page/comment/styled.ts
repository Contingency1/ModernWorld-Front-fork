'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

export const CommentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f0bb;
`;

export const RootDiv = styled.div`
  width: 90vw;
  height: 83vh;
  background-color: #fbf9e4;
  border-radius: 30px;
  box-shadow: 1px 1.5px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExistButton = styled.div`
  width: 2.5vw;
  height: 2.5vw;
  position: absolute;
  top: 11%;
  right: 6.5%;
  cursor: pointer;
`;

export const UserNameDiv = styled.div`
  width: 15vw;
  height: 3.5vw;
  font-size: 125%;
  position: absolute;
  top: 13%;
  right: 12%;
  color: #494949;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserRoomDiv = styled.div`
  width: 22vw;
  height: 24vh;
  border-radius: 30px;
  margin-top: 4vh;
  background-color: #ffffff;
  box-shadow: 1px 1.5px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentInputRootDiv = styled.div`
  width: 78vw;
  height: 10vh;
  background-color: #daedf8;
  border-radius: 40px;
  display: flex;
  align-items: center;
  margin-top: 1%;
`;

export const CommentInput = styled.input`
  width: 75%;
  height: 90%;
  font-size: 18px;
  background-color: #daedf8;
  border-width: 0;
  font-family: 'NeoDGM', sans-serif;
  outline: none;
  margin-left: 4%;
  color: #494949;
`;

export const CommentValueDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-left: 1%;
  width: 50vw;
`;

export const CommentEditInput = styled.input`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-left: 1%;
  width: 50vw;
  border: none;
`;

export const CommentSenderNicknameDiv = styled.div`
  color: #a1a1a1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  width: 8vw;
`;

export const ImageDiv = styled.div<StyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.$marginLeft};
  margin-right: ${(props) => props.$marginRight};
  position: relative;
  cursor: pointer;
`;

export const CommentRootDiv = styled.div`
  width: 78vw;
  height: 8vh;
  background-color: #ffffff;
  border-radius: 25px;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentNicknameDiv = styled.div`
  width: 80%;
  height: 80%;
  font-size: 80%;
  display: flex;
  margin-left: 2%;
  align-items: center;
`;

export const CommentDateDiv = styled.div`
  width: 13%;
  height: 80%;
  color: #b7b7b7;
  font-size: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageNationDiv = styled.div`
  position: absolute;
  bottom: 13%;
  width: 8vw;
  height: 2vh;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const EditButton = styled.div<StyleType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5vw;
  font-size: 15px;
  cursor: pointer;
  pointer-events: ${(props) => (props.$pointerClick ? 'auto' : 'none')};
`;

export const ReplyCountDiv = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  font-size: 13px;
  margin-top: 30%;
  margin-left: 60%;
  position: absolute;
`;

export const ReplyDiv = styled.div`
  position: relative;
  width: 4vw;
  height: 100%;
  display: flex;
  align-items: center;
`;
