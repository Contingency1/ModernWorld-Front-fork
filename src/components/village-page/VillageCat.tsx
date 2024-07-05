import * as S from '@/components/village-page/style';
import SearchBox from './SearchBox';
import Link from 'next/link';
import { Pagenation } from './Pagenation';

export default function VillageDog() {
  return (
    <S.BackgroundDisplay color="#CACACA">
      <S.Title>
        <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/KakaoTalk_20240509_151108128.png"></img>
      </S.Title>
      <S.TheBiggestBox color="#ffffff">
        <SearchBox inputcolor="#ffffff"></SearchBox>
        <S.FlexBox>
          <Pagenation></Pagenation>
        </S.FlexBox>
      </S.TheBiggestBox>
      <Link href="/villagedog">강쥐마을가기</Link>
    </S.BackgroundDisplay>
  );
}
