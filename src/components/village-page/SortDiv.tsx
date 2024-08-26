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
    <div style={{ marginTop: '5vh' }}>
      {SortArray.map((sortName) => (
        <S.SortCheckDiv
          key={sortName.name}
          onClick={() => {
            setSortState(sortName.sort);
            clearPage(1);
          }}>
          <S.SortCheckBox
            key={sortName.name}
            $check={sortState === sortName.sort}></S.SortCheckBox>
          <div style={{ marginLeft: '10%' }}>{sortName.name}</div>
        </S.SortCheckDiv>
      ))}
    </div>
  );
}
