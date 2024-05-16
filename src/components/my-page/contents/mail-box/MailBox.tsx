import * as S from "@/components/my-page/contents/style";
import MailBoxBody from "./MailBoxBody";

export default function MailBox() {
  return (
    <>
      <S.ContentSection>
        <S.BookMarkBody>
          <MailBoxBody />
          <S.BookMarkSide>
            <S.RMenuDiv>편지</S.RMenuDiv>
            <S.RMenuDiv>선물</S.RMenuDiv>
          </S.BookMarkSide>
        </S.BookMarkBody>
      </S.ContentSection>
    </>
  );
}
