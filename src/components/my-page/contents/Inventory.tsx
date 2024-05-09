import * as S from "@/components/my-page/contents/style";

export default function Inventory() {
  return (
    <>
      <S.ContentSection>
        <S.InventoryHeader>
          <S.TMenuDiv>오브제</S.TMenuDiv>
          <S.TMenuDiv>캐릭터</S.TMenuDiv>
        </S.InventoryHeader>
        <S.InventoryBody>
          <S.InventoryBox>
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
          </S.InventoryBox>
          <S.InventorySide>
            <S.RMenuDiv>재진</S.RMenuDiv>
            <S.RMenuDiv>영은</S.RMenuDiv>
            <S.RMenuDiv>은우</S.RMenuDiv>
            <S.RMenuDiv>준우</S.RMenuDiv>
            <S.RMenuDiv>진</S.RMenuDiv>
          </S.InventorySide>
        </S.InventoryBody>
      </S.ContentSection>
    </>
  );
}
