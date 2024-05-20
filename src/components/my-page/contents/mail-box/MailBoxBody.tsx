import * as S from "@/components/my-page/contents/mail-box/style";
import MailBoxBodyEle from "./MailBoxBodyEle";

export default function MailBoxBody() {
  return (
    <>
      <S.Grid>
        <MailBoxBodyEle title="받은" />
        <MailBoxBodyEle title="보낸" />
      </S.Grid>
    </>
  );
}
