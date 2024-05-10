import * as S from "@/components/my-page/contents/style";

export default function Inventory() {
  return (
    <>
      <S.ContentSection>
        <S.BookMarkHeader>
          <S.TMenuDiv>오브제</S.TMenuDiv>
          <S.TMenuDiv>캐릭터</S.TMenuDiv>
        </S.BookMarkHeader>
        <S.BookMarkBody>
          <S.BookMarkBox height="65vh">
            {[...Array(12)].map((_, index) => (
              <S.ItemDiv key={index}></S.ItemDiv>
            ))}
            <S.PageSection>
              <img
                src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"
                alt="<"
                width="30vw"
              />
              1 / 2
              <img
                src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"
                alt="<"
                width="30vw"
              />
            </S.PageSection>
          </S.BookMarkBox>
          <S.BookMarkSide>
            <S.RMenuDiv>재진</S.RMenuDiv>
            <S.RMenuDiv>영은</S.RMenuDiv>
            <S.RMenuDiv>은우</S.RMenuDiv>
            <S.RMenuDiv>준우</S.RMenuDiv>
            <S.RMenuDiv>진</S.RMenuDiv>
          </S.BookMarkSide>
        </S.BookMarkBody>
      </S.ContentSection>
    </>
  );
}
