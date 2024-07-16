'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import MAILBOX from '@/app/api/mailBox';
import { useEffect } from 'react';
import MailBoxBodyEle from './MailBoxBodyEle';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  mailBoxSelectAtom,
  senderDataAtom,
  receiverDataAtom,
} from '@/states/mailboxAtoms';

export default function MailBoxBody() {
  const type = useAtomValue(mailBoxSelectAtom);
  const setSenderData = useSetAtom(senderDataAtom);
  const setReceiverData = useSetAtom(receiverDataAtom);

  const getData = async (mailBoxType: number) => {
    if (mailBoxType) {
      setSenderData(await MAILBOX.getPostsList('senderNo'));
      setReceiverData(await MAILBOX.getPostsList('receiverNo'));
    } else {
      setSenderData(await MAILBOX.getPresentsList('senderNo'));
      setReceiverData(await MAILBOX.getPresentsList('receiverNo'));
    }
  };

  useEffect(() => {
    getData(type);
  }, [type]);

  return (
    <>
      <S.Grid>
        <MailBoxBodyEle title={type ? '보낸 선물' : '보낸 편지'} />
        <MailBoxBodyEle title={type ? '받은 선물' : '받은 편지'} />
      </S.Grid>
    </>
  );
}
