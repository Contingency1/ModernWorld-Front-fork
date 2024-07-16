'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import MailBoxBodyEle from './MailBoxBodyEle';
import { useAtomValue } from 'jotai';
import { mailBoxSelectAtom } from '@/states/mailboxAtoms';

export default function MailBoxBody() {
  const type = useAtomValue(mailBoxSelectAtom);

  return (
    <>
      <S.Grid>
        <MailBoxBodyEle title={type ? '보낸 선물' : '보낸 편지'} />
        <MailBoxBodyEle title={type ? '받은 선물' : '받은 편지'} />
      </S.Grid>
    </>
  );
}
