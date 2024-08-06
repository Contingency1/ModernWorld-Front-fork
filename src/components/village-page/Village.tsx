'use client';

import * as S from '@/components/village-page/styled';
import SearchBox from './SearchBox';
import { Pagenation } from './Pagenation';
import Link from 'next/link';

export default function Village(props: { animal: string }) {
  return (
    <S.BackgroundDisplay color="#CACACA">
      <S.Title>
        <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/KakaoTalk_20240509_151108128.png"></img>
      </S.Title>
      <Link href="/my-page">
        <S.ExitButton
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/exit.png'
          }></S.ExitButton>
      </Link>
      <S.TheBiggestBox color="#ffffff">
        <SearchBox inputColor="#ffffff"></SearchBox>
        <S.FlexBox>
          <Pagenation animal={props.animal}></Pagenation>
        </S.FlexBox>
      </S.TheBiggestBox>
    </S.BackgroundDisplay>
  );
}
