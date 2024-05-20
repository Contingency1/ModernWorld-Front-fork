import * as S from "@/components/my-page/contents/mail-box/style";
import ItemListEle from "./ItemListEle";

export default function ItemList(props) {
  return (
    <>
      <S.ContentsView height="20vh">
        <S.ListScroll>
          <ItemListEle title={props.title} />
          <ItemListEle title={props.title} />
          <ItemListEle />
          <ItemListEle />
          <ItemListEle />
          <ItemListEle />
        </S.ListScroll>
      </S.ContentsView>
    </>
  );
}
