import "../../style/globals.css";
import * as S from "@/components/my-page/style";
import LeftSection from "@/components/my-page/user/LeftSection";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <S.BodyContainer>
        <S.GridContainer>
          <LeftSection></LeftSection>
          <S.OutLineSection width="148vh" height="82vh">
            <S.ContentSection>{children}</S.ContentSection>
          </S.OutLineSection>
        </S.GridContainer>
      </S.BodyContainer>
    </>
  );
}
