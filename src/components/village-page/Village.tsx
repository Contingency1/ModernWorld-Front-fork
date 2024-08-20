'use client';

import * as S from '@/components/village-page/styled';
import SearchBox from './SearchBox';
import { Pagenation } from './Pagenation';
import Link from 'next/link';

export default function Village(props: { animal: string }) {
  return (
    <S.BackgroundDisplay color={props.animal === 'cat' ? '#CACACA' : '#E5D9B6'}>
      <S.Title>
        <img
          src={
            props.animal === 'cat'
              ? 'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/KakaoTalk_20240509_151108128.png'
              : 'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%95%EC%95%84%EC%A7%80+%EB%A7%88%EC%9D%84.png'
          }></img>
      </S.Title>
      <Link href="/my-page">
        <S.ExitButton
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/exit.png'
          }></S.ExitButton>
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
