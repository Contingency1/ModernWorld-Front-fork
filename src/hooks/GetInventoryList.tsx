"use client";

import useGetData from "@/utils/useGetData";
import { useEffect } from "react";
import * as S from "@/components/my-page/contents/inventory/style";

export default function GetInventoryList(props) {
  const data = useGetData(
    `http://54.180.98.58:3000/inventory/users/${props.user}?theme=${props.theme}`
  );

  return (
    <>
      {data.length > 0 ? (
        data.map((i) => <S.ItemDiv key={i.no}>{i.image}</S.ItemDiv>)
      ) : (
        <p>에러</p>
      )}
    </>
  );
}
