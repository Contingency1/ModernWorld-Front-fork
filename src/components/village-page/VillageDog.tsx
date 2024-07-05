import * as S from '@/components/village-page/style';
import SearchBox from './SearchBox';
import Link from 'next/link';
import { Pagenation } from './Pagenation';

export default function VillageDog() {
  return (
    <S.BackgroundDisplay color="#e5d9b6">
      <S.Title>
        <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%95%EC%95%84%EC%A7%80+%EB%A7%88%EC%9D%84.png"></img>
      </S.Title>
      <S.TheBiggestBox color="#fffbee">
        <SearchBox inputcolor="#fffbee"></SearchBox>
        <S.FlexBox>
          <Pagenation></Pagenation>
        </S.FlexBox>
      </S.TheBiggestBox>
      <Link href="/villagecat">냥이마을가기</Link>
    </S.BackgroundDisplay>
  );
}
