"use client";

import * as S from "@/components/my-page/contents/mail-box/style";
import { useAtom } from "jotai";
import { typeAtom } from "@/states/mailboxAtoms";

export default function GiftTitle(props: any) {
  const [type] = useAtom(typeAtom);

  return (
    <>
      <S.MarginDiv margin="0.5vh 0 1vh 0" fontSize="28px">
        {props.title} (3)
      </S.MarginDiv>
      <S.UserInfo>
        <img
          src={
            type
              ? "https://wang0514.s3.ap-northeast-2.amazonaws.com/page/gift-icon.png"
              : "https://wang0514.s3.ap-northeast-2.amazonaws.com/page/mail.png"
          }
          alt="gift"
          width="20vw"
        />
        <S.MarginDiv margin="1vw">재진 님에게 보냈습니다.</S.MarginDiv>
      </S.UserInfo>
    </>
  );
}
