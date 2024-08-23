'use client';

import * as S from '@/components/village-page/styled';
import SearchBox from './SearchBox';
import { Pagenation } from './Pagenation';
import Link from 'next/link';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';
import { COLOR } from '@/utils/color';

export default function Village(props: { animal: string }) {
  return (
    <S.BackgroundDisplay
      color={props.animal === 'cat' ? COLOR.grey : COLOR.beige200}>
      <S.Title>
        <Image
          src={
            props.animal === 'cat' ? IMAGE.catVillageLogo : IMAGE.dogVillageLogo
          }
          alt={'마을 로고'}
          fill
          sizes="100vw"
        />
      </S.Title>
      <Link href="/my-page">
        <S.ExitButton>
          <Image
            src={IMAGE.exit}
            alt={'마이페이지로 돌아가기'}
            fill
            sizes="100vw"></Image>
        </S.ExitButton>
      </Link>
      <S.TheBiggestBox
        color={props.animal === 'cat' ? COLOR.white : COLOR.beige100}>
        <SearchBox
          inputColor={
            props.animal === 'cat' ? COLOR.white : COLOR.beige100
          }></SearchBox>
        <S.FlexBox>
          <Pagenation animal={props.animal}></Pagenation>
        </S.FlexBox>
      </S.TheBiggestBox>
    </S.BackgroundDisplay>
  );
}
