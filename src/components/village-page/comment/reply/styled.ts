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

export const ModalDiv = styled.div`
  width: 50vw;
  height: 98vh;
  background-color: #f5f0bb;
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
`;

export const CommentDiv = styled.div`
  margin-top: 5%;
  width: 80%;
  height: 8%;
  font-size: 15px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid;
`;

export const RepliesRootDiv = styled.div`
  width: 80%;
  height: 10%;
  font-size: 10px;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PostRepliesDiv = styled.div`
  width: 80%;
  height: 10%;
  border-radius: 30px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PostRepliesInput = styled.input`
  width: 70%;
  height: 95%;
  border: none;
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
`;

export const ReplyValueDiv = styled.div`
  width: 20vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export const ReplyValueInput = styled.input`
  width: 20vw;
  height: 90%;
  display: flex;
  background-color: #f5f0bb;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border: none;
`;

export const EditBtn = styled.div<StyleType>`
  pointer-events: ${(props) => (props.$pointerClick ? 'auto' : 'none')};
  font-size: 10px;
`;
