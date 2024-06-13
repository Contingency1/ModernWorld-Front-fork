"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

interface BookMarkBox {
  height?: string;
  backColor?: string;
}

/** 인벤토리 / 상점 그리드 설정 */
export const BookMarkBox = styled.div<BookMarkBox>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 6vh;
  padding: 5vh 10vw;
  width: 180vw;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backColor};
  /* background-color: #e9eff1; */
  border-radius: 20px;
`;

/** 인벤토리의 각 아이템 넣을 div */
export const ItemDiv = styled.div`
  height: 80%;
  width: 85%;
  padding: 10%;
  background-color: #fff;
  border-radius: 20px;
`;

/** Link 태그 style */

export const LinkBox = styled(Link)`
  text-decoration-line: none;
`;

interface Img {
  img?: string;
}

/** 각 아이템 이미지 넣을 태그 */
export const Img = styled.div<Img>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
  object-position: center;
`;
