'use client';

import Link from 'next/link';
import * as S from '@/components/village-page/comment/styled';
import { UserSelectedAtom } from '@/states/village';
import { useAtom } from 'jotai';

export const RedirectPrevPage = () => {
  const [userSelected] = useAtom(UserSelectedAtom);

  return (
    <Link href={`/previewVillageUsers/${Number(userSelected)}`}>
      <S.ExistButton
        src={
          'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png'
        }></S.ExistButton>
    </Link>
  );
};
