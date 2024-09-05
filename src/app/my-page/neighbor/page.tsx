'use client';

import Neighbor from '@/components/my-page/contents/neighbor/Neighbor';
import SendPostModal from '@/components/my-page/send-post-modal/SendPostModal';
import { isNeighborSendModalAtom } from '@/states/neighbor';
import { useAtomValue } from 'jotai';
import '../../../style/globals.css';

export default function Page() {
  const isSendMailModal = useAtomValue(isNeighborSendModalAtom);
  return (
    <>
      {isSendMailModal === true ? <SendPostModal /> : <></>}
      <Neighbor />
    </>
  );
}
