'use client';

import * as S from '@/components/village-page/styled';
import { currentPageAtom, sortStateAtom } from '@/states/village';
import { useAtom, useSetAtom } from 'jotai';

export default function RadioSort() {
  const SortArray = [
    { sort: '', checkd: true, name: '최신' },
    { sort: 'accumulationPoint', name: '랭킹' },
    { sort: 'like', name: '하트' },
  ];

  const [sortState, setSortState] = useAtom(sortStateAtom);
  const clearPage = useSetAtom(currentPageAtom);

  return (
    <div style={{ marginTop: '50px' }}>
      {SortArray.map((e) => (
        <S.SortCheckDiv>
          <S.SortCheckBox
            key={e.sort}
            onClick={() => {
              setSortState(e.sort);
              clearPage(1);
            }}
            $check={sortState === e.sort}></S.SortCheckBox>
          <div style={{ marginLeft: '10%' }}>{e.name}</div>
        </S.SortCheckDiv>
      ))}
    </div>
  );
}
