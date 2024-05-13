import * as S from "@/components/my-page/contents/style";
import * as SM from "@/components/my-page/contents/mail-box/style";

export default function MailBox() {
  return (
    <>
      <S.ContentSection>
        <S.BookMarkBody>
          <SM.Grid>
            <SM.MailBoxSection>
              <SM.MarginDiv margin="0.5vh 0 1vh 0" fontSize="28px">
                보낸 선물 (3)
              </SM.MarginDiv>
              <SM.UserInfo>
                <img
                  src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/gift-icon.png"
                  alt="gift"
                  width="20vw"
                />
                <SM.MarginDiv margin="1vw">
                  재진 님에게 보냈습니다.
                </SM.MarginDiv>
              </SM.UserInfo>

              <SM.ContentsView height="25vh"></SM.ContentsView>
              <S.PageSection>
                <img
                  src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"
                  alt="<"
                  width="30vw"
                />
                1 / 2
                <img
                  src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"
                  alt="<"
                  width="30vw"
                />
              </S.PageSection>
              <SM.ContentsView height="20vh"></SM.ContentsView>
            </SM.MailBoxSection>
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
