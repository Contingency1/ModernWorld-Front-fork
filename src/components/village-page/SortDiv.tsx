'use client';

import * as S from '@/components/village-page/style';
import { atom, useAtom } from 'jotai';
import { useState } from 'react';
import { PageNumber } from './Pagenation';

export default function RadioSort() {
  const SortArray = [
    { name: '최신', checkd: true },
    { name: '랭킹' },
    { name: '좋아요' },
  ];

  const [sortTarget, setSortTarget] = useAtom(SortStateAtom);

  const [selectSort, setSelectSort] = useState(SortArray[0].name);

  const [reset, setReset] = useAtom(PageNumber);

  function SortBoxCheck(name: string) {
    setSelectSort(name);
    setSortTarget(name);
    setReset(1);
  }

  return (
    <>
      {SortArray.map((e) => (
        <S.SortCheckBox
          key={e.name}
          onClick={() => SortBoxCheck(e.name)}
          check={selectSort === e.name}>
          {e.name}
        </S.SortCheckBox>
      ))}
    </>
  );
}

export const SortStateAtom = atom('');
