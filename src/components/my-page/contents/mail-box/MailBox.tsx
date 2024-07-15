'use client';

import * as S from '@/components/my-page/contents/style';
import MailBoxBody from './MailBoxBody';
import SideBookMark from './SideBookMark';
import MAILBOX from '@/app/api/mailBox';
import { useSetAtom, useAtomValue } from 'jotai';
import {
  senderPresentAtom,
  receiverPresentAtom,
  selectMailBoxTypeAtom,
} from '@/states/mailboxAtoms';
import { useEffect } from 'react';

export default function MailBox() {
  const setSenderPresents = useSetAtom(senderPresentAtom);
  const setReceiverPresents = useSetAtom(receiverPresentAtom);
  const selectMailBoxType = useAtomValue(selectMailBoxTypeAtom);

  const getSenderPresentsList = async () => {
    const response = await MAILBOX.getPresentsList('senderNo');
    setSenderPresents(response);
  };

  const getReceiverPresentsList = async () => {
    const response = await MAILBOX.getPresentsList('receiverNo');
    setReceiverPresents(response);
  };

  useEffect(() => {
    if (selectMailBoxType === 0) {
    } else {
      getSenderPresentsList();
      getReceiverPresentsList();
    }
  }, [selectMailBoxType]);

  return (
    <>
      <S.ContentSection>
        <S.BookMarkBody>
          <MailBoxBody />
          <SideBookMark />
        </S.BookMarkBody>
      </S.ContentSection>
    </>
  );
}
