import * as S from "@/components/my-page/contents/mail-box/style";
import Pagination from "../../pagination/Pagination";
import ItemInfo from "./ItemInfo";
import GiftTitle from "./gifttitle";
import ItemList from "./ItemList";

export default function MailBoxBody() {
  return (
    <>
      <S.Grid>
        <S.MailBoxSection>
          <GiftTitle />
          <ItemInfo />
          <Pagination width="70%" />
          <ItemList />
        </S.MailBoxSection>
      </S.Grid>
    </>
  );
}
