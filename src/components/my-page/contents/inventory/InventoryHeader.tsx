'use client';

import * as S from '@/components/my-page/contents/style';
import { useAtom } from 'jotai';
import { selectedTypeAtom } from '@/states/inventoryAtoms';

export default function InventoryHeader() {
  const [itemType, setItemType] = useAtom(selectedTypeAtom);
  const itemTypeClick = (type: string) => {
    if (type === 'characters') {
      setItemType('characters');
    } else {
      setItemType('objects');
    }
  };

  return (
    <>
      <S.BookMarkHeader>
        <S.TMenuDiv
          color={itemType === 'objects' ? '#FF7070' : '#FFB1B1'}
          onClick={() => itemTypeClick('objects')}>
          오브제
        </S.TMenuDiv>
        <S.TMenuDiv
          color={itemType === 'characters' ? '#FF7070' : '#FFB1B1'}
          onClick={() => itemTypeClick('characters')}>
          캐릭터
        </S.TMenuDiv>
      </S.BookMarkHeader>
    </>
  );
}
