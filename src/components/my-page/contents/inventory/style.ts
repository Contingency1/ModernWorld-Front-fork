"use client";
import styled from "styled-components";
import Link from "next/link";

interface BookMarkBox {
  height?: string;
  backColor?: string;
}

/** 인벤토리 / 상점 그리드 설정 */
export const BookMarkBox = styled.div<BookMarkBox>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5vh;
  padding: 5vh 10vw;
  width: 180vw;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backColor};
  /* background-color: #e9eff1; */
  border-radius: 20px;
`;

interface ImgUrl {
  img?: string;
}

/** 인벤토리의 각 아이템 넣을 div */
export const ItemDiv = styled.div<ImgUrl>`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
`;

/** Link 태그 style */

export const LinkBox = styled(Link)`
  text-decoration-line: none;
`;
