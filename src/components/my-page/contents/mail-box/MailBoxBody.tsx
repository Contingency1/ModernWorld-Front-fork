"use client";

import * as S from "@/components/my-page/contents/mail-box/style";
import MailBoxBodyEle from "./MailBoxBodyEle";
import { useAtom } from "jotai";
import { typeAtom } from "@/states/mailboxAtoms";

export default function MailBoxBody() {
  const [type] = useAtom(typeAtom);

  return (
    <>
      <S.Grid>
        <MailBoxBodyEle title={type ? "받은 선물" : "받은 편지"} />
        <MailBoxBodyEle title={type ? "받은 선물" : "받은 편지"} />
      </S.Grid>
    </>
  );
}
