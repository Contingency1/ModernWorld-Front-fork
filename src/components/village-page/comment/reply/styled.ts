'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

export const PageDarkDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 50vw;
  height: 84vh;
  background-color: #f5f0bb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const ModalDiv = styled.div`
  width: 48vw;
  height: 80vh;
  background-color: #fbf9e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  justify-content: center;
`;

export const HeaderUserName = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-left: 10vw;
`;

export const CloseBtn = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 8vw;
  cursor: pointer;
`;

export const CommentRootDiv = styled.div`
  margin-top: 1%;
  width: 88%;
  height: 20%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 200;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const CommentDiv = styled.div`
  margin-top: 2%;
  margin-right: 2%;
  width: 88%;
  height: 88%;
  font-size: 20px;
  position: relative;
`;

export const Line = styled.div`
  width: 42%;
  border-top: 1px solid #000000;
  margin-top: 30px;
  position: absolute;
  top: 31.4%;
  z-index: 1;
`;

export const CommentEditInput = styled.textarea`
  width: 88%;
  height: 40%;
  font-size: 20px;
  position: relative;
  border: none;
  outline: none;
  margin-bottom: 6.3%;
  resize: none;
  overflow: hidden;
  font-family: 'NeoDGM', sans-serif;
`;

export const RepliesRootDiv = styled.div`
  width: 88%;
  height: 10%;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PostRepliesDiv = styled.div`
  width: 88%;
  height: 10%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 3%;
  box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.3);
`;

export const PostRepliesInput = styled.input`
  width: 85%;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
  font-family: 'NeoDGM', sans-serif;
`;

export const Images = styled.img<StyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.$marginLeft};
  margin-right: ${(props) => props.$marginRight};
  cursor: pointer;
`;

export const PagesDiv = styled.div`
  width: 10vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 11.5%;
`;

export const ReplyValueDiv = styled.div`
  width: 22vw;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-left: 1.5%;
`;

export const ReplyNickname = styled.div`
  width: 8vw;
  height: 100%;
  font-size: 15px;
  flex-direction: column;
  position: relative;
  margin-top: 6.5%;
  margin-left: 2%;
`;

export const ReplyCreatedAt = styled.div`
  width: 9vw;
  font-size: 11px;
  color: #9b9b9b;
  position: absolute;
  margin-top: 1%;
`;

export const ReplyValueInput = styled.textarea`
  width: 22vw;
  height: 100%;
  display: flex;
  background-color: #fbf9e4;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 15px;
  outline: none;
  resize: none;
  overflow: hidden;
  font-family: 'NeoDGM', sans-serif;
`;

export const EditDeleteBtnDiv = styled.div`
  width: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  font-size: 16px;
  right: 4.5%;
  bottom: 7%;
`;

export const EditBtn = styled.div`
  width: 2.5vw;
  font-size: 15px;
  color: #2d37ff;
  cursor: pointer;
  margin-left: 2.3%;
`;

export const DeleteBtn = styled.div`
  width: 2.5vw;
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  color: #ff1414;
  cursor: pointer;
`;

export const CommentCreated = styled.div`
  font-size: 12px;
  width: 7vw;
  color: #b7b7b7;
  position: absolute;
  left: 5%;
  bottom: 10%;
`;
