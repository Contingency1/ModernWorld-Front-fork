'use client';

import * as S from '@/components/village-page/styled';
import SearchBox from './SearchBox';
import { Pagenation } from './Pagenation';
import Link from 'next/link';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';

export default function Village(props: { animal: string }) {
  return (
    <S.BackgroundDisplay color={props.animal === 'cat' ? '#CACACA' : '#E5D9B6'}>
      <S.Title>
        <Image
          src={
            props.animal === 'cat' ? IMAGE.catVillageLogo : IMAGE.dogVillageLogo
          }
          alt={'마을 로고'}
          fill
        />
      </S.Title>
      <Link href="/my-page">
        <S.ExitButton src={IMAGE.exit}></S.ExitButton>
      </Link>
      <S.TheBiggestBox color={props.animal === 'cat' ? '#ffffff' : '#FFFBEE'}>
        <SearchBox
          inputColor={
            props.animal === 'cat' ? '#ffffff' : '#FFFBEE'
          }></SearchBox>
        <S.FlexBox>
          <Pagenation animal={props.animal}></Pagenation>
        </S.FlexBox>
      </S.TheBiggestBox>
    </S.BackgroundDisplay>
  );
}
