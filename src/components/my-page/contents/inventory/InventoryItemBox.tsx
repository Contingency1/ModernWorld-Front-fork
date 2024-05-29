"use client";

import * as S from "@/components/my-page/contents/inventory/style";
import Pagination from "../../pagination/Pagination";
import useGetData from "@/utils/useGetData";

export default function InventoryItemBox() {
  const data = useGetData(
    `http://54.180.98.58:3000/inventory/users/${1}?theme=${"여름 테마"}`
  );
  return (
    <>
      <S.BookMarkBox height="65vh" backColor="#e9eff1">
        {data.length > 0 ? (
          data.map((i) => <S.ItemDiv key={i.no}>{i.item.image}</S.ItemDiv>)
        ) : (
          <p>error</p>
        )}
      </S.BookMarkBox>
    </>
  );
}
