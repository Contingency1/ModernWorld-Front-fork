import * as S from "@/components/my-page/contents/mail-box/style";
export default function ItemInfo() {
  return (
    <>
      <S.ContentsView height="25vh">
        <S.DelSection>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png"
            alt="del"
            width="20vw"
          />
        </S.DelSection>

        <S.ItemImg>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/monariart.png"
            alt="img"
            width="90vw"
          />
          <S.FontSize fontSize="20px">아이템 이름</S.FontSize>
          <S.FontSize fontSize="14px">아이템 설명</S.FontSize>
          <S.FontSize fontSize="14px">보낸 날짜</S.FontSize>
        </S.ItemImg>
      </S.ContentsView>
    </>
  );
}
