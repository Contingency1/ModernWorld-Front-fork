import * as S from '@/components/my-page/contents/style';
import ShopItemBox from './ShopItemBox';
import ShopRightBookMark from './ShopRightBookMark';

export default function ShopBody() {
  return (
    <>
      <S.BookMarkBody>
        <ShopItemBox />
        <ShopRightBookMark />
      </S.BookMarkBody>
    </>
  );
}
