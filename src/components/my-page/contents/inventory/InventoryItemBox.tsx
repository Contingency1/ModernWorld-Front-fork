"use client";

import * as S from "@/components/my-page/contents/inventory/style";
import { useAtom } from "jotai";
import { userItemAtom } from "@/state/itemAtoms";
import getUserItem from "@/app/api/getUserItem";

interface Item {
  no: number;
  item: {
    image: string;
  };
}

export default function InventoryItemBox() {
  getUserItem(2);
  const [userItem] = useAtom<Item[]>(userItemAtom);

  let length: number;
  try {
    length = userItem.length;
  } catch (e) {
    length = 0;
  }

  return (
    <>
      <S.BookMarkBox height="65vh" backColor="#e9eff1">
        {length > 0
          ? userItem.map((i) => (
              <S.ItemDiv key={i.no}>
                <S.Img img={i.item.image} />
              </S.ItemDiv>
            ))
          : null}
        {[...Array(12 - length)].map((_, index) => (
          <S.ItemDiv key={`null-${index}`}></S.ItemDiv>
        ))}
      </S.BookMarkBox>
    </>
  );
}
