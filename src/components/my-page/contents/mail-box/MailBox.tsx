import * as S from "@/components/my-page/contents/style";
import * as SM from "@/components/my-page/contents/mail-box/style";

export default function MailBox() {
  return (
    <>
      <S.ContentSection>
        <S.BookMarkBody>
          <SM.Grid>
            <SM.MailBoxSection></SM.MailBoxSection>
            <SM.MailBoxSection></SM.MailBoxSection>
          </SM.Grid>
          <S.BookMarkSide>
            <S.RMenuDiv>편지</S.RMenuDiv>
            <S.RMenuDiv>선물</S.RMenuDiv>
          </S.BookMarkSide>
        </S.BookMarkBody>
      </S.ContentSection>
    </>
  );
}
