import * as S from "@/components/my-page/contents/mail-box/style";
import ItemListEle from "./ItemListEle";

export default function ItemList() {
  return (
    <>
      <S.ContentsView height="20vh">
        <S.ListScroll>
          <ItemListEle />
        </S.ListScroll>
      </S.ContentsView>
    </>
  );
}
