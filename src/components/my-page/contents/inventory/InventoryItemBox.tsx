"use client";

import * as S from "@/components/my-page/contents/inventory/style";
import { useAtom } from "jotai";
import { userItemAtom } from "@/state/itemAtoms";
import useGetUserItem from "@/app/api/useGetUserItem";
import updateStatus from "@/app/api/updateStatus";

interface Item {
  no: number;
  item: {
    image: string;
  };
}

export default function InventoryItemBox() {
  useGetUserItem(1);
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
              <div
                key={i.no}
                onClick={(e) => {
                  updateStatus(i.itemNo);
                }}
                style={{ cursor: "pointer" }}
              >
                <S.ItemDiv key={i.no}>
                  {i.status ? (
                    <S.StatusCheck color="#5A61E6" />
                  ) : (
                    <S.StatusCheck color="#EC4A4A" />
                  )}
                  <S.Img img={i.item.image} />
                </S.ItemDiv>
              </div>
            ))
          : null}
        {[...Array(12 - length)].map((_, index) => (
          <S.ItemDiv key={`null-${index}`}></S.ItemDiv>
        ))}
      </S.BookMarkBox>
    </>
  );
}
