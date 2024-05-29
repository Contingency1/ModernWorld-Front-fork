import * as S from "@/components/my-page/contents/inventory/style";
import Pagination from "../my-page/pagination/Pagination";

export default function ShopItemBox() {
  return (
    <>
      <S.BookMarkBox height="65vh" backColor="#F5F0E2">
        {[...Array(12)].map((_, index) => (
          <S.ItemDiv key={index}></S.ItemDiv>
        ))}
        <Pagination width="100%" />
      </S.BookMarkBox>
    </>
  );
}
