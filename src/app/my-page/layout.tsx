'use client';

import '../../style/globals.css';
import * as S from '@/components/my-page/user/style';
import LeftSection from '@/components/my-page/user/LeftSection';
import Image from 'next/image';
import { IMAGE } from '@/utils/image';
import Link from 'next/link';
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
        <S.Copyright>
          Design 김진 박경후 이채영 <br /> Dev 김은우 김진 김준우 안진우 조영은{' '}
          <br />
          Copyright ⓒ 2024 Modern Agile. All rights reserved.
        </S.Copyright>
        <Link href={'/terms-of-service'}>
          <S.Rule>이용약관 / 개인정보 처리방침</S.Rule>
        </Link>
        <S.Logo>
          <Image alt={'모던월드 로고'} fill src={IMAGE.favicon}></Image>
        </S.Logo>
      </S.BodyContainer>
    </>
  );
}
