import * as S from "@/components/my-page/contents/inventory/style";
import Pagination from "../../pagination/Pagination";

export default function InventoryItemBox() {
  return (
    <>
      <S.BookMarkBox height="65vh">
        {[...Array(12)].map((_, index) => (
          <S.ItemDiv key={index}></S.ItemDiv>
        ))}
        <Pagination width="100%" />
      </S.BookMarkBox>
    </>
  );
}
