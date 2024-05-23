"use client";

import "../../style/globals.css";
import * as S from "@/components/my-page/user/style";
import LeftSection from "@/components/my-page/user/LeftSection";
import useSearchBar from "@/hooks/SearchBar";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const search = useSearchBar();
  return (
    <>
      <S.BodyContainer>
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
