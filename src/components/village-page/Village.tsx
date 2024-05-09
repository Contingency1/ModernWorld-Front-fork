import * as S from '@/components/village-page/style';

export default function Village() {
    return (
        <S.BackgroundDisplay>
            <S.Title>강아지 마을</S.Title>
            <S.SearchBox>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EB%8F%8B%EB%B3%B4%EA%B8%B0"></img>
                <S.SearchInput placeholder="닉네임으로 검색"></S.SearchInput>
            </S.SearchBox>
        </S.BackgroundDisplay>
    );
}
