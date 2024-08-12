'use client';

import MailBox from '@/components/my-page/contents/mail-box/MailBox';
import SendPostModal from '@/components/my-page/send-post-modal/SendPostModal';
import { isSendMailModalAtom } from '@/states/mailboxAtoms';
import { useAtomValue } from 'jotai';

export default function MyPage() {
  const isModal = useAtomValue(isSendMailModalAtom);
  return (
    <>
      {isModal ? <SendPostModal /> : <></>}
      <MailBox />
    </>
  );
}
