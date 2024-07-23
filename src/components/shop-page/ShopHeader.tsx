'use client';

import * as S from '@/components/my-page/contents/style';
import { useAtom } from 'jotai';
import { selectItemTypeAtom } from '@/states/shopAtoms';

export default function ShopHeader() {
  const [itemType, setItemType] = useAtom(selectItemTypeAtom);
  const itemTypeClick = (type: number) => {
    if (type === 0) {
      setItemType(0);
    } else {
      setItemType(1);
    }
  };

  return (
    <>
      <S.BookMarkHeader>
        <S.TMenuDiv
          color={itemType === 0 ? '#FF7070' : '#FFB1B1'}
          onClick={() => itemTypeClick(0)}>
          오브제
        </S.TMenuDiv>
        <S.TMenuDiv
          color={itemType === 1 ? '#FF7070' : '#FFB1B1'}
          onClick={() => itemTypeClick(1)}>
          캐릭터
        </S.TMenuDiv>
      </S.BookMarkHeader>
    </>
  );
}
