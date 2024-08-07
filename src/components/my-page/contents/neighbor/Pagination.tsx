'use client';

import {
  neighborApplicationPageAtom,
  neighborListPageAtom,
  pageViewTypeAtom,
} from '@/states/neighbor';
import * as S from './style';
import { useAtom, useAtomValue } from 'jotai';

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
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"
          alt="<"
          width="30vw"
          onClick={previousPage}
        />
        {page} / {props.totalPage}
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"
          alt=">"
          width="30vw"
          onClick={nextPage}
        />
      </S.PaginationSection>
    </>
  );
}
