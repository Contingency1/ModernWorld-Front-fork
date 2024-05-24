"use client";

import "../../style/globals.css";
import * as S from "@/components/my-page/user/style";
import LeftSection from "@/components/my-page/user/LeftSection";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <S.BodyContainer color="#c9d7dd">
        <S.GridContainer>
          <LeftSection></LeftSection>
          <S.OutLineSection width="148vh" height="82vh">
            {children}
          </S.OutLineSection>
        </S.GridContainer>
      </S.BodyContainer>
    </>
  );
}
