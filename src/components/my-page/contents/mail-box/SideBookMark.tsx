'use client';

import * as S from '@/components/my-page/contents/style';
import { useAtom } from 'jotai';
import { mailBoxSelectAtom } from '@/states/mailboxAtoms';

export default function SideBookMark() {
  const [type, setType] = useAtom(mailBoxSelectAtom);

  return (
    <>
      <S.BookMarkSide>
        <S.RMenuDiv
          color={!type ? '#363A8D' : '#7C80C8'}
          onClick={() => setType(0)}>
          편지
        </S.RMenuDiv>
        <S.RMenuDiv
          color={type ? '#363A8D' : '#7C80C8'}
          onClick={() => setType(1)}>
          선물
        </S.RMenuDiv>
      </S.BookMarkSide>
    </>
  );
}
