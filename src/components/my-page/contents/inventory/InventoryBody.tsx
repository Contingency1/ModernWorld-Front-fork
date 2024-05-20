import * as S from "@/components/my-page/contents/style";
import InventoryItemBox from "./InventoryItemBox";
import InvenRightBookMark from "./InvenRightBookMark";

export default function InventoryBody() {
  return (
    <>
      <S.BookMarkBody>
        <InventoryItemBox />
        <InvenRightBookMark />
      </S.BookMarkBody>
    </>
  );
}
