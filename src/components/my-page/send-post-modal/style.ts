'use client';
import { StyleType } from '@/types/style';
import styled from 'styled-components';

/** 페이지 전체를 어둡게 하기 */
export const PageDark = styled.div`
  width: 68.35%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

/** 편지 보내기 모달창 바디 */
export const SendPostModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 50vh;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
`;

/** 편지 보내기 모달창 헤더 */
export const SendPostModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  z-index: 50;
`;

/** 이미지 태그 */
export const Img = styled.img<StyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.$margin};
  cursor: ${(props) => props.cursor};
`;

/** 편지 보내기 모달 타이틀 */
export const SendPostModalTitle = styled.div`
  display: flex;
  align-items: center;
  margin: -2.5vw -2vw 0 0;
  width: 100%;
`;

/** 메모 입력창 */
export const InputContainer = styled.textarea`
  width: 35vw;
  height: 30vh;
  font-size: 18px;
  color: #3b3b3b;
  font-family: 'NeoDGM', sans-serif;
  padding: 1vw;
  background-color: #d9d9d9;
  border: none;
  resize: none;
  outline: none;
`;

/** font 설정 */
export const Font = styled.div<StyleType>`
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.$margin};
  cursor: ${(props) => props.cursor};
`;

/** 편지 보내기 모달 푸터 */
export const SendPostModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1vw 1vw 0.6vw 1vw;
  margin-left: -3vw;
  width: 100%;
`;

/** pointer css */
export const CursorPointer = styled.div`
  cursor: pointer;
`;

/** 글자수 container */
export const TextCounterContainer = styled.div`
  margin-left: auto;
  margin-top: -2vw;
  margin-right: 2.5vw;
`;
