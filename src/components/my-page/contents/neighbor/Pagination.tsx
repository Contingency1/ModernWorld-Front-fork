'use client';

import {
  neighborApplicationPageAtom,
  neighborListPageAtom,
  pageViewTypeAtom,
} from '@/states/neighbor';
import * as S from './style';
import { useAtom, useAtomValue } from 'jotai';
import { IMAGE } from '@/utils/image';

export default function Pagination(props: {
  width: string;
  margin: string;
  totalPage: number;
}) {
  const pageViewType = useAtomValue(pageViewTypeAtom);
  const [page, setPage] = useAtom(
    pageViewType === 'list'
      ? neighborListPageAtom
      : neighborApplicationPageAtom,
  );

  const nextPage = () => {
    if (page < props.totalPage) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <S.PaginationSection width={props.width} $margin={props.margin}>
        <img
          src={IMAGE.leftArrow}
          alt="<"
          width="30vw"
          onClick={previousPage}
          style={{ cursor: 'pointer' }}
        />
        {page} / {props.totalPage}
        <img
          src={IMAGE.rightArrow}
          alt=">"
          width="30vw"
          onClick={nextPage}
          style={{ cursor: 'pointer' }}
        />
      </S.PaginationSection>
    </>
  );
}
