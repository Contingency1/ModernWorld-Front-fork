'use client';

import * as S from '@/components/village-page/style';
import { sortStateAtom } from '@/states/village';
import { useAtom } from 'jotai';

export default function RadioSort() {
  const SortArray = [
    { sort: '', checkd: true, name: '최신' },
    { sort: 'accumulationPoint', name: '랭킹' },
    { sort: 'like', name: '좋아요' },
  ];

  const [sortState, setSortState] = useAtom(sortStateAtom);

  return (
    <>
      {SortArray.map((e) => (
        <S.SortCheckBox
          key={e.sort}
          onClick={() => setSortState(e.sort)}
          $check={sortState === e.sort}>
          {e.name}
        </S.SortCheckBox>
      ))}
    </>
  );
}
