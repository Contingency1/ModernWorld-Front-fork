import * as S from '@/components/village-page/style';
import GetUserApi from './getUserApi';
import RadioSort from './RadioSort';
import SearchBox from './SearchBox';
import Link from 'next/link';

export default function VillageDog() {
    return (
        <S.BackgroundDisplay color="#CACACA">
            <S.Title>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/KakaoTalk_20240509_151108128.png"></img>
            </S.Title>
            <S.TheBiggestBox color="#ffffff">
                <SearchBox inputcolor="#ffffff"></SearchBox>
                <S.FlexBox>
                    <S.LeftArrow>
                        <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"></img>
                    </S.LeftArrow>
                    <S.GreyBox>
                        <GetUserApi></GetUserApi>
                    </S.GreyBox>
                    <S.RightArrow_SortDiv>
                        <S.RightArrow>
                            <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"></img>
                        </S.RightArrow>
                        <RadioSort></RadioSort>
                    </S.RightArrow_SortDiv>
                </S.FlexBox>
            </S.TheBiggestBox>
            <Link href="/villagedog">강쥐마을가기</Link>
        </S.BackgroundDisplay>
    );
}
