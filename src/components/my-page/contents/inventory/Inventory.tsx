import * as S from '@/components/my-page/contents/style';
import InventoryHeader from './InventoryHeader';
import InventoryBody from './InventoryBody';

export default function Inventory() {
  return (
    <>
      <S.ContentSection>
        <InventoryHeader />
        <InventoryBody />
      </S.ContentSection>
    </>
  );
}
