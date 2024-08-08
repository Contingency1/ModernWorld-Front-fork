'use client';

import { useAtomValue } from 'jotai';
import * as S from './style';
import {
  neighborApplicationPageAtom,
  neighborListPageAtom,
  pageViewTypeAtom,
} from '@/states/neighbor';
import Management from './Management';
import List from './List';
import { useEffect, useState } from 'react';
import NEIGHBOR from '@/app/api/neighbor';
import { NeighborsDataType } from '@/types/neighbors';

export default function NeighborBody() {
  const pageViewType = useAtomValue(pageViewTypeAtom);
  const page = useAtomValue(
    pageViewType === 'list'
      ? neighborListPageAtom
      : neighborApplicationPageAtom,
  );
  const [neighborsData, setNeighborsData] = useState<null | NeighborsDataType>(
    null,
  );

  const getNeighbors = async (
    page: number,
    take: number,
    status: boolean,
    type: undefined | string,
  ) => {
    const response = await NEIGHBOR.getNeighbors(page, take, status, type);
    setNeighborsData(response);
  };

  useEffect(() => {
    if (pageViewType === 'management') {
      getNeighbors(page, 1, false, 'receiverNo');
    } else {
      getNeighbors(page, 3, true, undefined);
    }
  }, [page, pageViewType]);

  return (
    <>
      <S.DefaultDiv>
        {pageViewType === 'list' ? (
          <List userData={neighborsData} />
        ) : (
          <Management userData={neighborsData} />
        )}
      </S.DefaultDiv>
    </>
  );
}
