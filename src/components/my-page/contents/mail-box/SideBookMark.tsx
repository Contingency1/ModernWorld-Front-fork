"use client";

import * as S from "@/components/my-page/contents/style";
import { useAtom } from "jotai";
import { typeAtom } from "@/states/mailboxAtoms";

export default function SideBookMark() {
  const [type, setType] = useAtom(typeAtom);

  const typeClick = (index: number) => {
    switch (index) {
      case 0:
        setType(0);
        break;
      default:
        setType(1);
        break;
    }
  };

  return (
    <>
      <S.BookMarkSide>
        <S.RMenuDiv
          color={!type ? "#363A8D" : "#7C80C8"}
          onClick={() => typeClick(0)}
        >
          편지
        </S.RMenuDiv>
        <S.RMenuDiv
          color={type ? "#363A8D" : "#7C80C8"}
          onClick={() => typeClick(1)}
        >
          선물
        </S.RMenuDiv>
      </S.BookMarkSide>
    </>
  );
}
