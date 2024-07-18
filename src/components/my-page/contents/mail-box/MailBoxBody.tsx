'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import MailBoxBodyEle from './MailBoxBodyEle';
import { useAtomValue, useAtom } from 'jotai';
import {
  mailBoxSelectAtom,
  postReceiverDataAtom,
  postSenderDataAtom,
  presentReceiverDataAtom,
  presentSenderDataAtom,
} from '@/states/mailboxAtoms';
import MAILBOX from '@/app/api/mailBox';
import { useEffect } from 'react';

export default function MailBoxBody() {
  const type = useAtomValue(mailBoxSelectAtom);
  const [postSenderData, setPostSenderData] = useAtom(postSenderDataAtom);
  const [postReceiverData, setPostReceiverData] = useAtom(postReceiverDataAtom);
  const [presentSenderData, setPresentSenderData] = useAtom(
    presentSenderDataAtom,
  );
  const [presentReceiverData, setPresentReceiverData] = useAtom(
    presentReceiverDataAtom,
  );

  const getPresents = async () => {
    setPresentSenderData(await MAILBOX.getPresentsList('senderNo'));
    setPresentReceiverData(await MAILBOX.getPresentsList('receiverNo'));
  };

  const getPosts = async () => {
    setPostSenderData(await MAILBOX.getPostsList('senderNo'));
    setPostReceiverData(await MAILBOX.getPostsList('receiverNo'));
  };

  useEffect(() => {
    if (type === 0) {
      getPosts();
    } else {
      getPresents();
    }
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
