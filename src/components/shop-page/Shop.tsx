import * as S from "@/components/my-page/contents/style";
import ShopHeader from "./ShopHeader";
import ShopBody from "./ShopBody";

export default function Shop() {
  return (
    <>
      <S.ContentSection>
        <ShopHeader />
        <ShopBody />
      </S.ContentSection>
    </>
  );
}
