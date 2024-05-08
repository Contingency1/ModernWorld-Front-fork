import * as S from "@/components/my-page/style";

export default function MyPage() {
  return (
    <>
      <S.BodyContainer>
        <S.GridContainer>
          <S.OutLineSection width="48vh" height="82vh">
            <S.CharacterInfo>
              <img
                src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/firstDog.png"
                alt="강아지"
                width="110vw"
              />
              <S.NameSection>밍밍이 (아기)</S.NameSection>
            </S.CharacterInfo>
            <S.PointInfo>
              <S.PointTitle>사용 가능 포인트</S.PointTitle>
              <S.PointContent>2,000 point</S.PointContent>
              <hr width="80%" />
              <S.PointTitle>누적 포인트</S.PointTitle>
              <S.PointContent>10,000 point</S.PointContent>
            </S.PointInfo>
            <S.CategorySection>
              <S.CategoryEle borderRight="1px solid #A2A2A2">
                우편함
              </S.CategoryEle>
              <S.CategoryEle>이웃</S.CategoryEle>
              <S.CategoryEle
                borderRight="1px solid #A2A2A2"
                borderTop="1px solid #A2A2A2"
              >
                퀘스트
              </S.CategoryEle>
              <S.CategoryEle borderTop="1px solid #A2A2A2">
                인벤토리
              </S.CategoryEle>
              <S.CategoryEle
                borderRight="1px solid #A2A2A2"
                borderTop="1px solid #A2A2A2"
              >
                출석체크
              </S.CategoryEle>
              <S.CategoryEle borderTop="1px solid #A2A2A2">펫 방</S.CategoryEle>
            </S.CategorySection>
          </S.OutLineSection>
          <S.OutLineSection width="148vh" height="82vh">
            <S.ContentSection></S.ContentSection>
          </S.OutLineSection>
        </S.GridContainer>
      </S.BodyContainer>
    </>
  );
}
