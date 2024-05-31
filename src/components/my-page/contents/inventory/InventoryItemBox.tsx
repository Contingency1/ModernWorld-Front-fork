"use client";

import * as S from "@/components/my-page/contents/inventory/style";
import { useAtom } from "jotai";
import { userItemAtom } from "@/state/itemAtoms";
import getUserItem from "@/app/api/getUserItem";
import { themeAtom } from "@/state/itemAtoms";

export default function InventoryItemBox() {
  getUserItem(2);
  const [userItem] = useAtom(userItemAtom);
  return (
    <>
      <S.BookMarkBox height="65vh" backColor="#e9eff1">
        {userItem.length > 0 ? (
          userItem.map((i) => (
            <S.ItemDiv img={i.item.image} key={i.no}></S.ItemDiv>
          ))
        ) : (
          <p>loading...</p>
        )}
      </S.BookMarkBox>
    </>
  );
}
