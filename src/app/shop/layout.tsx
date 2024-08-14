'use client';

import '../../style/globals.css';
import * as S from '@/components/my-page/user/style';
import LeftSection from '@/components/my-page/user/LeftSection';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <S.BodyContainer color="#E5D9B6">
        <S.GridContainer>
          <LeftSection />
          <S.OutLineSection width="148vh" height="82vh">
            {children}
          </S.OutLineSection>
        </S.GridContainer>
      </S.BodyContainer>
    </>
  );
}
