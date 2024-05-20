import * as S from '@/components/village-page/style';
import GetUserApi from './getUserApi';
import RadioSort from './RadioSort';

export default function VillageDog() {
    return (
        <S.BackgroundDisplay>
            <S.Title>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%95%EC%95%84%EC%A7%80+%EB%A7%88%EC%9D%84.png"></img>
            </S.Title>
            <S.CreamBox>
                <S.SearchBox>
                    <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EB%8F%8B%EB%B3%B4%EA%B8%B0"></img>
                    <S.SearchInput placeholder="닉네임으로 검색"></S.SearchInput>
                </S.SearchBox>
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
            </S.CreamBox>
        </S.BackgroundDisplay>
    );
}
